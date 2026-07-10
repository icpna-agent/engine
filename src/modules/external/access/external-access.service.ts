import { Injectable } from "@nestjs/common";
import { ExternalAccessRepository } from "./external-access.repository";
import { ExternalUserAccessDto } from "./dto/external-user-access.dto";
import { ExternalUserAccessResultDto } from "./dto/external-user-access-result.dto";

@Injectable()
export class ExternalAccessService {
  constructor(
    private readonly externalAccessRepository: ExternalAccessRepository,
  ) {}

  async upsertUserAccess(dto: ExternalUserAccessDto): Promise<ExternalUserAccessResultDto> {
    const phone = dto.phone.trim();
    const defaultBook = await this.externalAccessRepository.findIntermediateFiveBook();
    const enabledFrom = new Date();
    const enabledTo = this.addOneCalendarMonth(enabledFrom);
    const existingUser = await this.externalAccessRepository.findActiveUserByPhone(phone);

    if (!existingUser) {
      const createdUser = await this.externalAccessRepository.createUser({
        phone,
        enabled: true,
        enabledFrom,
        enabledTo,
        currentBookId: defaultBook.id,
      });

      return {
        created: true,
        defaultBookApplied: true,
        defaultBookId: defaultBook.id,
        defaultBookEdition: defaultBook.edition ?? "Intermediate 5",
        user: createdUser,
      };
    }

    const defaultBookApplied = !existingUser.currentBookId;
    const updatedUser = await this.externalAccessRepository.updateUser(existingUser.id, {
      enabled: true,
      enabledFrom,
      enabledTo,
      currentBookId: existingUser.currentBookId ?? defaultBook.id,
    });

    return {
      created: false,
      defaultBookApplied,
      defaultBookId: defaultBook.id,
      defaultBookEdition: defaultBook.edition ?? "Intermediate 5",
      user: updatedUser,
    };
  }

  private addOneCalendarMonth(date: Date): Date {
    const nextMonth = new Date(date);
    const originalDay = date.getUTCDate();

    nextMonth.setUTCMonth(date.getUTCMonth() + 1, 1);

    const lastDayOfTargetMonth = new Date(
      Date.UTC(nextMonth.getUTCFullYear(), nextMonth.getUTCMonth() + 1, 0),
    ).getUTCDate();

    nextMonth.setUTCDate(Math.min(originalDay, lastDayOfTargetMonth));

    return nextMonth;
  }
}

