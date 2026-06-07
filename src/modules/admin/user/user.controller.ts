import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { UserService } from "./user.service";
import { UserCreateDto } from "./dto/user-create.dto";
import { UserUpdateDto } from "./dto/user-update.dto";
import { UserListDto, UserListFiltersDto } from "./dto/user-list.dto";
import { UserResultDto } from "./dto/user-result.dto";
import { UserDeleteResultDto } from "./dto/user-delete-result.dto";

@ApiTags("user")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@Controller("admin/user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("find-all")
  @ApiOperation({ summary: "Get all users paginated" })
  @ApiOkResponse({ type: UserListDto })
  findAll(@Query() filters: UserListFiltersDto) {
    return this.userService.findAll(filters);
  }

  @Get("find-one/:id")
  @ApiOperation({ summary: "Get a user by ID" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: UserResultDto })
  findOne(@Param("id") id: string) {
    return this.userService.findOne(+id);
  }

  @Post("create")
  @ApiOperation({ summary: "Create a user" })
  @ApiOkResponse({ type: UserResultDto })
  create(@Body() dto: UserCreateDto) {
    return this.userService.create(dto);
  }

  @Patch("update/:id")
  @ApiOperation({ summary: "Update a user" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: UserResultDto })
  update(@Param("id") id: string, @Body() dto: UserUpdateDto) {
    return this.userService.update(+id, dto);
  }

  @Delete("delete/:id")
  @ApiOperation({ summary: "Delete a user" })
  @ApiParam({ name: "id", type: Number })
  @ApiOkResponse({ type: UserDeleteResultDto })
  delete(@Param("id") id: string) {
    return this.userService.delete(+id);
  }
}
