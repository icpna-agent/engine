import { Meta } from "@models/meta.model";
import { randomUUID } from "crypto";

export const entry_production: Meta = {
  object: "whatsapp_business_account",
  entry: [
    {
      id: randomUUID(),
      changes: [
        {
          value: {
            messaging_product: "whatsapp",
            metadata: {
              display_phone_number: "51936081148",
              phone_number_id: "756536844216424",
            },
            contacts: [
              {
                profile: {
                  name: "Santos Cachorros",
                },
                wa_id: "1443782653529215",
              },
            ],
            messages: [
              {
                from: "51929073820",
                id: randomUUID(),
                timestamp: Date.now().toString(),
                text: {
                  body: "<MESSAGE_BODY_TEXT>",
                },
                type: "text",
              },
            ],
          },
          field: "messages",
        },
      ],
    },
  ],
};
