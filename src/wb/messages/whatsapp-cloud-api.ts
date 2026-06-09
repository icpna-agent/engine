// =====================================================================
// 🚀 SDK GENERADO AUTOMÁTICAMENTE PARA WHATSAPP CLOUD API
// =====================================================================

export interface WhatsAppConfig {
  accessToken: string;
  phoneNumberId: string;
  wabaId?: string;
  version?: string;
}

export interface WbMetadata {
  _sent?: boolean;
  _node?: string;
  _tool?: string;
  _timestamp?: number;
}

export type SubscribeToYourWabaResponse = {
  success: string;
};

export type GetPhoneNumberIdResponse = {
  data: Array<{
    verified_name: string;
    display_phone_number: string;
    id: string;
    quality_rating: string;
  }>;
};

export type RegisterPhoneNumberResponse = {
  success: string;
};

export type RegisterPhoneNumberPayload = {
  messaging_product: "whatsapp";
  pin: string;
} & WbMetadata;

export type SendTestMessageResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendTestMessagePayload = {
  messaging_product: "whatsapp";
  to: string;
  type: "template";
  template: {
    name: string;
    language: {
      code: string;
    };
  };
} & WbMetadata;

export type GetWabaResponse = {
  id: string;
  name: string;
  timezone_id: string;
  message_template_namespace: string;
};

export type GetOwnedWabasResponse = {
  data: Array<{
    id: string;
    name: string;
    timezone_id: string;
    message_template_namespace: string;
  }>;
  paging: {
    cursors: {
      before: string;
      after: string;
    };
  };
};

export type GetSharedWabasResponse = {
  data: Array<{
    id: number;
    name: string;
    currency: string;
    timezone_id: string;
    message_template_namespace: string;
  }>;
  paging: {
    cursors: {
      before: string;
      after: string;
    };
  };
};

export type RegisterPhoneResponse = {
  success: boolean;
};

export type RegisterPhonePayload = {
  messaging_product: "whatsapp";
  pin: string;
} & WbMetadata;

export type DeregisterPhoneResponse = {
  success: boolean;
};

export type GetPhoneNumbersResponse = {
  data: Array<{
    verified_name: string;
    display_phone_number: string;
    id: string;
    quality_rating: string;
  }>;
};

export type GetPhoneNumberByIdResponse = {
  verified_name: string;
  display_phone_number: string;
  id: string;
  quality_rating: string;
};

export type GetDisplayNameStatusBetaResponse = {
  id: string;
  name_status: string;
};

export type RequestVerificationCodeResponse = {
  success: boolean;
};

export type RequestVerificationCodePayload = {
  code_method: string;
  locale: string;
} & WbMetadata;

export type VerifyCodeResponse = {
  success: boolean;
};

export type VerifyCodePayload = {
  code: string;
} & WbMetadata;

export type SetTwoStepVerificationCodeResponse = {
  success: boolean;
};

export type SetTwoStepVerificationCodePayload = {
  pin: string;
} & WbMetadata;

export type SubscribeToAWabaResponse = {
  success: boolean;
};

export type GetAllSubscriptionsForAWabaResponse = {
  data: Array<{
    whatsapp_business_api_data: {
      link: string;
      name: string;
      id: string;
    };
  }>;
};

export type UnsubscribeFromAWabaResponse = {
  success: boolean;
};

export type OverrideCallbackUrlResponse = {
  data: Array<{
    override_callback_uri: string;
    whatsapp_business_api_data: {
      id: string;
      link: string;
      name: string;
    };
  }>;
};

export type OverrideCallbackUrlPayload = {
  override_callback_uri: string;
  verify_token: string;
} & WbMetadata;

export type SendTextMessageResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendTextMessagePayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "text";
  text: {
    preview_url: boolean;
    body: string;
  };
} & WbMetadata;

export type SendReplyToTextMessageResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendReplyToTextMessagePayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  context: {
    message_id: string;
  };
  type: "text";
  text: {
    preview_url: boolean;
    body: string;
  };
} & WbMetadata;

export type SendTextMessageWithPreviewUrlResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendTextMessageWithPreviewUrlPayload = {
  messaging_product: "whatsapp";
  to: string;
  text: {
    preview_url: boolean;
    body: string;
  };
} & WbMetadata;

export type SendReplyWithReactionMessageResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendReplyWithReactionMessagePayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "reaction";
  reaction: {
    message_id: string;
    emoji: string;
  };
} & WbMetadata;

export type SendImageMessageByIdResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendImageMessageByIdPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "image";
  image: {
    id: string;
  };
} & WbMetadata;

export type SendReplyToImageMessageByIdResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendReplyToImageMessageByIdPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  context: {
    message_id: string;
  };
  type: "image";
  image: {
    id: string;
  };
} & WbMetadata;

export type SendImageMessageByUrlResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendImageMessageByUrlPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "image";
  image: {
    link: string;
  };
} & WbMetadata;

export type SendReplyToImageMessageByUrlResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendReplyToImageMessageByUrlPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  context: {
    message_id: string;
  };
  type: "image";
  image: {
    link: string;
  };
} & WbMetadata;

export type SendAudioMessageByIdResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendAudioMessageByIdPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "audio";
  audio: {
    id: string;
  };
} & WbMetadata;

export type SendReplyToAudioMessageByIdResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendReplyToAudioMessageByIdPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  context: {
    message_id: string;
  };
  type: "audio";
  audio: {
    id: string;
  };
} & WbMetadata;

export type SendAudioMessageByUrlResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendAudioMessageByUrlPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "audio";
  audio: {
    link: string;
  };
} & WbMetadata;

export type SendReplyToAudioMessageByUrlResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendReplyToAudioMessageByUrlPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  context: {
    message_id: string;
  };
  type: "audio";
  audio: {
    link: string;
  };
} & WbMetadata;

export type SendDocumentMessageByIdResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendDocumentMessageByIdPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "document";
  document: {
    id: string;
    caption: string;
    filename: string;
  };
} & WbMetadata;

export type SendReplyToDocumentMessageByIdResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendReplyToDocumentMessageByIdPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  context: {
    message_id: string;
  };
  type: "document";
  document: {
    id: string;
    caption: string;
    filename: string;
  };
} & WbMetadata;

export type SendDocumentMessageByUrlResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendDocumentMessageByUrlPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "document";
  document: {
    link: string;
    caption: string;
  };
} & WbMetadata;

export type SendReplyToDocumentMessageByUrlResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendReplyToDocumentMessageByUrlPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  context: {
    message_id: string;
  };
  type: "document";
  document: {
    link: string;
    caption: string;
  };
} & WbMetadata;

export type SendStickerMessageByIdResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendStickerMessageByIdPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "sticker";
  sticker: {
    id: string;
  };
} & WbMetadata;

export type SendReplyToStickerMessageByIdResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendReplyToStickerMessageByIdPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  context: {
    message_id: string;
  };
  type: "sticker";
  sticker: {
    id: string;
  };
} & WbMetadata;

export type SendStickerMessageByUrlResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendStickerMessageByUrlPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "sticker";
  sticker: {
    link: string;
  };
} & WbMetadata;

export type SendReplyToStickerMessageByUrlResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendReplyToStickerMessageByUrlPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  context: {
    message_id: string;
  };
  type: "sticker";
  sticker: {
    link: string;
  };
} & WbMetadata;

export type SendVideoMessageByIdResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendVideoMessageByIdPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "video";
  video: {
    caption: string;
    id: string;
  };
} & WbMetadata;

export type SendReplyToVideoMessageByIdResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendReplyToVideoMessageByIdPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  context: {
    message_id: string;
  };
  type: "video";
  video: {
    caption: string;
    id: string;
  };
} & WbMetadata;

export type SendVideoMessageByUrlResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendVideoMessageByUrlPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "video";
  video: {
    link: string;
    caption: string;
  };
} & WbMetadata;

export type SendReplyToVideoMessageByUrlResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendReplyToVideoMessageByUrlPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  context: {
    message_id: string;
  };
  type: "video";
  video: {
    link: string;
    caption: string;
  };
} & WbMetadata;

export type SendContactMessageResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendContactMessagePayload = {
  messaging_product: "whatsapp";
  to: string;
  type: "contacts";
  contacts: Array<{
    addresses: Array<{
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
      country_code: string;
      type: "<HOME|WORK>";
    }>;
    birthday: string;
    emails: Array<{
      email: string;
      type: "<WORK|HOME>";
    }>;
    name: {
      formatted_name: string;
      first_name: string;
      last_name: string;
      middle_name: string;
      suffix: string;
      prefix: string;
    };
    org: {
      company: string;
      department: string;
      title: string;
    };
    phones: Array<{
      phone: string;
      wa_id: string;
      type: "<HOME|WORK>";
    }>;
    urls: Array<{
      url: string;
      type: "<HOME|WORK>";
    }>;
  }>;
} & WbMetadata;

export type SendReplyToContactMessageResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendReplyToContactMessagePayload = {
  messaging_product: "whatsapp";
  to: string;
  context: {
    message_id: string;
  };
  type: "contacts";
  contacts: Array<{
    addresses: Array<{
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
      country_code: string;
      type: "<HOME|WORK>";
    }>;
    birthday: string;
    emails: Array<{
      email: string;
      type: "<WORK|HOME>";
    }>;
    name: {
      formatted_name: string;
      first_name: string;
      last_name: string;
      middle_name: string;
      suffix: string;
      prefix: string;
    };
    org: {
      company: string;
      department: string;
      title: string;
    };
    phones: Array<{
      phone: string;
      wa_id: string;
      type: "<HOME|WORK>";
    }>;
    urls: Array<{
      url: string;
      type: "<HOME|WORK>";
    }>;
  }>;
} & WbMetadata;

export type SendLocationMessageResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendLocationMessagePayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "location";
  location: {
    latitude: string;
    longitude: string;
    name: string;
    address: string;
  };
} & WbMetadata;

export type SendReplyToLocationMessageResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendReplyToLocationMessagePayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  context: {
    message_id: string;
  };
  type: "location";
  location: {
    latitude: string;
    longitude: string;
    name: string;
    address: string;
  };
} & WbMetadata;

export type SendMessageTemplateTextResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendMessageTemplateTextPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "template";
  template: {
    name: string;
    language: {
      code: string;
    };
    components: Array<{
      type: "body";
      parameters: Array<{
        type: "text";
        text: string;
      }>;
    }>;
  };
} & WbMetadata;

export type SendMessageTemplateMediaResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendMessageTemplateMediaPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "template";
  template: {
    name: string;
    language: {
      code: string;
    };
    components: Array<{
      type: "header";
      parameters: Array<{
        type: "image";
        image: {
          link: string;
        };
      }>;
    }>;
  };
} & WbMetadata;

export type SendMessageTemplateInteractiveResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendMessageTemplateInteractivePayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "template";
  template: {
    name: string;
    language: {
      code: string;
    };
    components: Array<{
      type: "header";
      parameters: Array<{
        type: "image";
        image: {
          link: string;
        };
      }>;
    }>;
  };
} & WbMetadata;

export type SendListMessageResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendListMessagePayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "interactive";
  interactive: {
    type: "list";
    header: {
      type: "text";
      text: string;
    };
    body: {
      text: string;
    };
    footer: {
      text: string;
    };
    action: {
      button: string;
      sections: Array<{
        title: string;
        rows: Array<{
          id: string;
          title: string;
          description: string;
        }>;
      }>;
    };
  };
} & WbMetadata;

export type SendReplyToListMessageResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendReplyToListMessagePayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  context: {
    message_id: string;
  };
  type: "interactive";
  interactive: {
    type: "list";
    header: {
      type: "text";
      text: string;
    };
    body: {
      text: string;
    };
    footer: {
      text: string;
    };
    action: {
      button: string;
      sections: Array<{
        title: string;
        rows: Array<{
          id: string;
          title: string;
          description: string;
        }>;
      }>;
    };
  };
} & WbMetadata;

export type SendReplyButtonResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendReplyButtonPayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "interactive";
  interactive: {
    type: "button";
    body: {
      text: string;
    };
    action: {
      buttons: Array<{
        type: "reply";
        reply: {
          id: string;
          title: string;
        };
      }>;
    };
  };
} & WbMetadata;

export type MarkMessageAsReadResponse = {
  success: boolean;
};

export type MarkMessageAsReadPayload = {
  messaging_product: "whatsapp";
  status: string;
  message_id: string;
} & WbMetadata;

export type SendSingleProductMessageResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendSingleProductMessagePayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "interactive";
  interactive: {
    type: "product";
    body: {
      text: string;
    };
    footer: {
      text: string;
    };
    action: {
      catalog_id: string;
      product_retailer_id: string;
    };
  };
} & WbMetadata;

export type SendMultiProductMessageResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendMultiProductMessagePayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "interactive";
  interactive: {
    type: "product_list";
    header: {
      type: "<HEADER_TYPE>";
      text: string;
    };
    body: {
      text: string;
    };
    footer: {
      text: string;
    };
    action: {
      catalog_id: string;
      sections: Array<{
        title: string;
        product_items: Array<{
          product_retailer_id: string;
        }>;
      }>;
    };
  };
} & WbMetadata;

export type SendCatalogMessageResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendCatalogMessagePayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "interactive";
  interactive: {
    type: "catalog_message";
    body: {
      text: string;
    };
    action: {
      name: string;
      parameters: {
        thumbnail_product_retailer_id: string;
      };
    };
    footer: {
      text: string;
    };
  };
} & WbMetadata;

export type SendCatalogTemplateMessageResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendCatalogTemplateMessagePayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "template";
  template: {
    name: string;
    language: {
      code: string;
    };
    components: Array<{
      type: "body";
      parameters: Array<{
        type: "text";
        text: string;
      }>;
    }>;
  };
} & WbMetadata;

export type GetTemplateByIdDefaultFieldsResponse = {
  name: string;
  components: Array<{
    type: "HEADER";
    format: string;
    text: string;
  }>;
  language: string;
  status: string;
  category: string;
  id: string;
};

export type GetTemplateByNameDefaultFieldsResponse = {
  data: Array<{
    name: string;
    components: Array<{
      type: "HEADER";
      format: string;
      text: string;
    }>;
    language: string;
    status: string;
    category: string;
    id: string;
  }>;
  paging: {
    cursors: {
      before: string;
      after: string;
    };
  };
};

export type GetAllTemplatesDefaultFieldsResponse = {
  data: Array<{
    name: string;
    previous_category: string;
    components: Array<{
      type: "HEADER";
      format: string;
      text: string;
    }>;
    language: string;
    status: string;
    category: string;
    id: string;
  }>;
  paging: {
    cursors: {
      before: string;
      after: string;
    };
  };
};

export type GetNamespaceResponse = {
  message_template_namespace: string;
  id: string;
};

export type CreateAuthenticationTemplateWOtpCopyCodeButtonResponse = {
  id: string;
  status: string;
  category: string;
};

export type CreateAuthenticationTemplateWOtpCopyCodeButtonPayload = {
  name: string;
  language: string;
  category: string;
  components: Array<{
    type: "BODY";
    add_security_recommendation: boolean;
  }>;
} & WbMetadata;

export type CreateAuthenticationTemplateWOtpOneTapAutofillButtonResponse = {
  id: string;
  status: string;
  category: string;
};

export type CreateAuthenticationTemplateWOtpOneTapAutofillButtonPayload = {
  name: string;
  language: string;
  category: string;
  components: Array<{
    type: "BODY";
    add_security_recommendation: boolean;
  }>;
} & WbMetadata;

export type CreateCatalogTemplateResponse = {
  category: string;
  id: string;
  status: string;
};

export type CreateCatalogTemplatePayload = {
  name: string;
  language: string;
  category: string;
  components: Array<{
    type: "BODY";
    text: string;
    example: {
      body_text: Array<Array<string>>;
    };
  }>;
} & WbMetadata;

export type CreateMultiProductMessageTemplateResponse = {
  id: string;
  status: string;
  category: string;
};

export type CreateMultiProductMessageTemplatePayload = {
  name: string;
  language: string;
  category: string;
  components: Array<{
    type: "HEADER";
    format: string;
    text: string;
    example: {
      header_text: Array<string>;
    };
  }>;
} & WbMetadata;

export type CreateTemplateWTextHeaderTextBodyTextFooterAnd2QuickReplyButtonsResponse = {
  id: string;
  status: string;
  category: string;
};

export type CreateTemplateWTextHeaderTextBodyTextFooterAnd2QuickReplyButtonsPayload = {
  name: string;
  language: string;
  category: string;
  components: Array<{
    type: "HEADER";
    format: string;
    text: string;
    example: {
      header_text: Array<string>;
    };
  }>;
} & WbMetadata;

export type CreateTemplateWImageHeaderTextBodyTextFooterAnd2CallToActionButtonsResponse = {
  id: string;
  status: string;
  category: string;
};

export type CreateTemplateWImageHeaderTextBodyTextFooterAnd2CallToActionButtonsPayload = {
  name: string;
  language: string;
  category: string;
  components: Array<{
    type: "HEADER";
    format: string;
    example: {
      header_handle: Array<string>;
    };
  }>;
} & WbMetadata;

export type CreateTemplateWLocationHeaderTextBodyTextFooterAndAWebsiteButtonsResponse = {
  id: string;
  status: string;
  category: string;
};

export type CreateTemplateWLocationHeaderTextBodyTextFooterAndAWebsiteButtonsPayload = {
  name: string;
  language: string;
  category: string;
  components: Array<{
    type: "HEADER";
    format: string;
  }>;
} & WbMetadata;

export type CreateTemplateWDocumentHeaderTextBodyAPhoneNumberButtonAndAUrlButtonResponse = {
  id: string;
  status: string;
  category: string;
};

export type CreateTemplateWDocumentHeaderTextBodyAPhoneNumberButtonAndAUrlButtonPayload = {
  name: string;
  language: string;
  category: string;
  components: Array<{
    type: "HEADER";
    format: string;
    example: {
      header_handle: Array<string>;
    };
  }>;
} & WbMetadata;

export type EditTemplateResponse = {
  success: boolean;
};

export type EditTemplatePayload = {
  name: string;
  components: Array<{
    type: "HEADER";
    format: string;
    text: string;
  }>;
  language: string;
  category: string;
} & WbMetadata;

export type DeleteTemplateByNameResponse = {
  success: boolean;
};

export type DeleteTemplateByIdResponse = {
  success: boolean;
};

export type CreateFlowResponse = {
  id: string;
};

export interface CreateFlowPayload extends WbMetadata {
  name: string;
  categories: string;
  clone_flow_id: string;
  endpoint_uri: string;
}

export type MigrateFlowsResponse = {
  migrated_flows: Array<{
    source_id: string;
    source_name: string;
    migrated_id: string;
  }>;
  failed_flows: Array<{
    source_name: string;
    error_code: string;
    error_message: string;
  }>;
};

export interface MigrateFlowsPayload extends WbMetadata {
  source_waba_id: string;
  source_flow_names: string;
}

export type GetFlowResponse = {
  id: string;
  name: string;
  categories: Array<string>;
  preview: {
    preview_url: string;
    expires_at: string;
  };
  status: string;
  validation_errors: unknown[];
  json_version: string;
  data_api_version: string;
  data_channel_uri: string;
  health_status: {
    can_send_message: string;
    entities: Array<{
      entity_type: string;
      id: string;
      can_send_message: string;
    }>;
  };
  whatsapp_business_account: {
    id: string;
    name: string;
    timezone_id: string;
    business_type: string;
    message_template_namespace: string;
  };
  application: {
    link: string;
    name: string;
    id: string;
  };
};

export type GetPreviewUrlResponse = {
  preview: {
    preview_url: string;
    expires_at: string;
  };
  id: string;
};

export type ListFlowsResponse = {
  data: Array<{
    name: string;
    status: string;
    categories: Array<string>;
    validation_errors: unknown[];
    id: string;
  }>;
  paging: {
    cursors: {
      before: string;
      after: string;
    };
  };
};

export type UpdateFlowJsonResponse = {
  success: boolean;
  validation_errors: Array<{
    error: string;
    error_type: string;
    message: string;
    line_start: number;
    line_end: number;
    column_start: number;
    column_end: number;
  }>;
};

export interface UpdateFlowJsonPayload extends WbMetadata {
  file: Blob | File;
  name: string;
  asset_type: string;
}

export type PublishFlowResponse = {
  success: boolean;
};

export type UpdateFlowMetadataResponse = {
  success: boolean;
};

export interface UpdateFlowMetadataPayload extends WbMetadata {
  name: string;
  categories: string;
  endpoint_uri: string;
}

export type ListAssetsGetFlowJsonUrlResponse = {
  data: Array<{
    name: string;
    asset_type: string;
    download_url: string;
  }>;
  paging: {
    cursors: {
      before: string;
      after: string;
    };
  };
};

export type DeprecateFlowResponse = {
  success: boolean;
};

export type DeleteFlowResponse = {
  success: boolean;
};

export type SetEncryptionPublicKeyResponse = {
  success: boolean;
};

export interface SetEncryptionPublicKeyPayload extends WbMetadata {
  business_public_key: string;
}

export type GetEncryptionPublicKeyResponse = {
  data: Array<{
    business_public_key: string;
    business_public_key_signature_status: string;
  }>;
};

export type SendDraftFlowByNameResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendDraftFlowByNamePayload = {
  messaging_product: "whatsapp";
  to: string;
  recipient_type: "individual";
  type: "interactive";
  interactive: {
    type: "flow";
    header: {
      type: "text";
      text: string;
    };
    body: {
      text: string;
    };
    footer: {
      text: string;
    };
    action: {
      name: string;
      parameters: {
        flow_message_version: string;
        flow_action: string;
        flow_token: string;
        flow_name: string;
        flow_cta: string;
        mode: string;
        flow_action_payload: {
          screen: string;
          data: {
            "<CUSTOM_KEY>": string;
          };
        };
      };
    };
  };
} & WbMetadata;

export type SendDraftFlowByIdResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendDraftFlowByIdPayload = {
  messaging_product: "whatsapp";
  to: string;
  recipient_type: "individual";
  type: "interactive";
  interactive: {
    type: "flow";
    header: {
      type: "text";
      text: string;
    };
    body: {
      text: string;
    };
    footer: {
      text: string;
    };
    action: {
      name: string;
      parameters: {
        flow_message_version: string;
        flow_action: string;
        flow_token: string;
        flow_id: string;
        flow_cta: string;
        mode: string;
        flow_action_payload: {
          screen: string;
          data: {
            "<CUSTOM_KEY>": string;
          };
        };
      };
    };
  };
} & WbMetadata;

export type SendPublishedFlowByNameResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendPublishedFlowByNamePayload = {
  messaging_product: "whatsapp";
  to: string;
  recipient_type: "individual";
  type: "interactive";
  interactive: {
    type: "flow";
    header: {
      type: "text";
      text: string;
    };
    body: {
      text: string;
    };
    footer: {
      text: string;
    };
    action: {
      name: string;
      parameters: {
        flow_message_version: string;
        flow_action: string;
        flow_token: string;
        flow_name: string;
        flow_cta: string;
        flow_action_payload: {
          screen: string;
          data: {
            "<CUSTOM_KEY>": string;
          };
        };
      };
    };
  };
} & WbMetadata;

export type SendPublishedFlowByIdResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendPublishedFlowByIdPayload = {
  messaging_product: "whatsapp";
  to: string;
  recipient_type: "individual";
  type: "interactive";
  interactive: {
    type: "flow";
    header: {
      type: "text";
      text: string;
    };
    body: {
      text: string;
    };
    footer: {
      text: string;
    };
    action: {
      name: string;
      parameters: {
        flow_message_version: string;
        flow_action: string;
        flow_token: string;
        flow_id: string;
        flow_cta: string;
        flow_action_payload: {
          screen: string;
          data: {
            "<CUSTOM_KEY>": string;
          };
        };
      };
    };
  };
} & WbMetadata;

export type CreateFlowTemplateMessageByNameResponse = {
  id: string;
  status: string;
  category: string;
};

export type CreateFlowTemplateMessageByNamePayload = {
  name: string;
  language: string;
  category: string;
  components: Array<{
    type: "body";
    text: string;
  }>;
} & WbMetadata;

export type CreateFlowTemplateMessageByFlowJsonResponse = {
  id: string;
  status: string;
  category: string;
};

export type CreateFlowTemplateMessageByFlowJsonPayload = {
  name: string;
  language: string;
  category: string;
  components: Array<{
    type: "body";
    text: string;
  }>;
} & WbMetadata;

export type CreateFlowTemplateMessageByIdResponse = {
  id: string;
  status: string;
  category: string;
};

export type CreateFlowTemplateMessageByIdPayload = {
  name: string;
  language: string;
  category: string;
  components: Array<{
    type: "body";
    text: string;
  }>;
} & WbMetadata;

export type SendFlowTemplateMessageResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendFlowTemplateMessagePayload = {
  messaging_product: "whatsapp";
  to: string;
  type: "template";
  template: {
    name: string;
    language: {
      code: string;
    };
    components: Array<{
      type: "button";
      sub_type: string;
      index: string;
      parameters: Array<{
        type: "action";
        action: {
          flow_token: string;
          flow_action_data: {
            "<CUSTOM_KEY>": string;
          };
        };
      }>;
    }>;
  };
} & WbMetadata;

export type GetEndpointRequestCountMetricResponse = {
  id: string;
  metric: {
    granularity: string;
    name: string;
    data_points: Array<{
      timestamp: string;
      data: Array<{
        key: string;
        value: number;
      }>;
    }>;
  };
};

export type GetEndpointRequestErrorMetricResponse = {
  id: string;
  metric: {
    granularity: string;
    name: string;
    data_points: Array<{
      timestamp: string;
      data: Array<{
        key: string;
        value: number;
      }>;
    }>;
  };
};

export type GetEndpointRequestErrorRateMetricResponse = {
  id: string;
  metric: {
    granularity: string;
    name: string;
    data_points: Array<{
      timestamp: string;
      data: Array<{
        key: string;
        value: number;
      }>;
    }>;
  };
};

export type GetEndpointRequestLatenciesMetricResponse = {
  id: string;
  metric: {
    granularity: string;
    name: string;
    data_points: Array<{
      timestamp: string;
      data: Array<{
        key: string;
        value: number;
      }>;
    }>;
  };
};

export type GetEndpointAvailabilityMetricResponse = {
  id: string;
  metric: {
    granularity: string;
    name: string;
    data_points: Array<{
      timestamp: string;
      data: Array<{
        key: string;
        value: number;
      }>;
    }>;
  };
};

export type UploadImageResponse = {
  id: string;
};

export interface UploadImagePayload extends WbMetadata {
  messaging_product: string;
  file: Blob | File;
}

export type UploadStickerResponse = {
  id: string;
};

export interface UploadStickerPayload extends WbMetadata {
  messaging_product: string;
  file: Blob | File;
}

export type UploadAudioResponse = {
  id: string;
};

export interface UploadAudioPayload extends WbMetadata {
  file: Blob | File;
  messaging_product: string;
}

export type RetrieveMediaUrlResponse = {
  messaging_product: "whatsapp";
  url: string;
  mime_type: string;
  sha256: string;
  file_size: string;
  id: string;
};

export type DeleteMediaResponse = {
  success: boolean;
};

export interface DeleteMediaPayload extends WbMetadata {

}

export type SendTypingIndicatorAndReadReceiptResponse = {
  success: boolean;
};

export type SendTypingIndicatorAndReadReceiptPayload = {
  messaging_product: "whatsapp";
  status: string;
  message_id: string;
  typing_indicator: {
    type: "text";
  };
} & WbMetadata;

export type ResumableUploadCreateAnUploadSessionResponse = {
  id: string;
};

export type ResumableUploadUploadFileDataResponse = {
  h: string;
};

export type ResumableUploadQueryFileUploadStatusResponse = {
  id: string;
  file_offset: number;
};

export type GetBusinessProfileResponse = {
  data: Array<{
    business_profile: {
      messaging_product: "whatsapp";
      address: string;
      description: string;
      vertical: string;
      about: string;
      email: string;
      websites: Array<string>;
      profile_picture_url: string;
    };
  }>;
};

export type UpdateBusinessProfileResponse = {
  data: Array<{
    business_profile: {
      messaging_product: "whatsapp";
      address: string;
      description: string;
      vertical: string;
      about: string;
      email: string;
      websites: Array<string>;
      profile_picture_url: string;
      id: string;
    };
    id: string;
  }>;
};

export type UpdateBusinessProfilePayload = {
  messaging_product: "whatsapp";
  address: string;
  description: string;
  vertical: string;
  about: string;
  email: string;
  websites: Array<string>;
  profile_picture_handle: string;
} & WbMetadata;

export type GetCommerceSettingsResponse = {
  data: Array<{
    is_cart_enabled: boolean;
    is_catalog_visible: boolean;
    id: string;
  }>;
};

export type SetOrUpdateCommerceSettingsResponse = {
  success: boolean;
};

export type SendOrderDetailsMessageResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendOrderDetailsMessagePayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "interactive";
  interactive: {
    type: "order_details";
    order_details: {
      header: {
        type: "image";
        image: {
          link: string;
          provider: {
            name: string;
          };
        };
      };
      body: {
        text: string;
      };
      footer: {
        text: string;
      };
      action: {
        reference_id: string;
        type: "digital-goods";
        payment_type: string;
        payment_configuration: string;
        currency: string;
        total_amount: {
          value: number;
          offset: number;
        };
        order: {
          status: string;
          items: Array<{
            retailer_id: string;
            name: string;
            amount: {
              value: number;
              offset: number;
            };
            sale_amount: {
              value: number;
              offset: number;
            };
            quantity: number;
          }>;
          subtotal: {
            value: number;
            offset: number;
          };
          tax: {
            value: number;
            offset: number;
            description: string;
          };
          shipping: {
            value: number;
            offset: number;
            description: string;
          };
          discount: {
            value: number;
            offset: number;
            description: string;
            discount_program_name: string;
          };
          catalog_id: string;
          expiration: {
            timestamp: string;
            description: string;
          };
        };
      };
    };
  };
} & WbMetadata;

export type SendOrderStatusMessageResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendOrderStatusMessagePayload = {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "interactive";
  interactive: {
    type: "order_status";
    body: {
      text: string;
    };
    action: {
      name: string;
      parameters: {
        reference_id: string;
        order: {
          status: string;
          description: string;
        };
      };
    };
  };
} & WbMetadata;

export type GetQrCodeResponse = {
  data: Array<{
    code: string;
    prefilled_message: string;
    deep_link_url: string;
  }>;
};

export type GetAllQrCodesDefaultFieldsResponse = {
  data: Array<{
    code: string;
    prefilled_message: string;
    deep_link_url: string;
  }>;
};

export type GetAllQrCodesSpecificFieldsResponse = {
  data: Array<{
    code: string;
    prefilled_message: string;
    qr_image_url: string;
  }>;
};

export type GetQrCodeSvgImageUrlResponse = {
  data: Array<{
    prefilled_message: string;
    deep_link_url: string;
    qr_image_url: string;
  }>;
};

export type GetQrCodePngImageUrlResponse = {
  data: Array<{
    prefilled_message: string;
    deep_link_url: string;
    qr_image_url: string;
  }>;
};

export type CreateQrCodeResponse = {
  code: string;
  prefilled_message: string;
  deep_link_url: string;
  qr_image_url: string;
};

export type CreateQrCodePayload = {
  prefilled_message: string;
  generate_qr_image: string;
} & WbMetadata;

export type UpdateMessageQrCodeResponse = {
  code: string;
  prefilled_message: string;
  deep_link_url: string;
};

export type UpdateMessageQrCodePayload = {
  prefilled_message: string;
  code: string;
} & WbMetadata;

export type DeleteQrCodeResponse = {
  success: boolean;
};

export type GetBusinessPortfolioSpecificFieldsResponse = {
  id: string;
  name: string;
  timezone_id: number;
};

export type GetAnalyticsResponse = {
  analytics: {
    phone_numbers: Array<string>;
    country_codes: Array<string>;
    granularity: string;
    data_points: Array<{
      start: number;
      end: number;
      sent: number;
      delivered: number;
    }>;
  };
  id: string;
};

export type GetConversationAnalyticsResponse = {
  analytics: {
    phone_numbers: Array<string>;
    country_codes: Array<string>;
    granularity: string;
    data_points: Array<{
      start: number;
      end: number;
      sent: number;
      delivered: number;
    }>;
  };
  id: string;
};

export type GetCreditLinesResponse = {
  data: Array<{
    id: string;
    legal_entity_name: string;
  }>;
};

export type MigrateAccountResponse = {
  success: string;
};

export type MigrateAccountPayload = {
  messaging_product: "whatsapp";
  pin: string;
  backup: {
    data: string;
    password: string;
  };
} & WbMetadata;

export type GetBlockedUsersResponse = {
  data: Array<{
    messaging_product: "whatsapp";
    wa_id: string;
  }>;
  paging: {
    cursors: {
      before: string;
      after: string;
    };
  };
};

export type BlockUserSResponse = {
  messaging_product: "whatsapp";
  block_users: {
    added_users: Array<{
      input: string;
      wa_id: string;
    }>;
  };
};

export type BlockUserSPayload = {
  messaging_product: "whatsapp";
  block_users: Array<{
    user: string;
  }>;
} & WbMetadata;

export type UnblockUserSResponse = {
  messaging_product: "whatsapp";
  block_users: {
    removed_users: Array<{
      input: string;
      wa_id: string;
    }>;
  };
};

export type UnblockUserSPayload = {
  messaging_product: "whatsapp";
  block_users: Array<{
    user: string;
  }>;
} & WbMetadata;

export type GetIndiaBasedBusinessComplianceInfoResponse = {
  data: Array<{
    entity_name: string;
    entity_type: string;
    is_registered: boolean;
    grievance_officer_details: {
      name: string;
      email: string;
      landline_number: string;
      mobile_number: string;
    };
    customer_care_details: {
      email: string;
      landline_number: string;
      mobile_number: string;
    };
    messaging_product: "whatsapp";
  }>;
};

export type AddIndiaBasedBusinessComplianceInfoResponse = {
  success: boolean;
};

export type SendSampleTextMessageResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendSampleTextMessagePayload = {
  messaging_product: "whatsapp";
  to: string;
  type: "template";
  template: {
    name: string;
    language: {
      code: string;
    };
  };
} & WbMetadata;

export type SendSampleShippingConfirmationTemplateResponse = {
  messaging_product: "whatsapp";
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
};

export type SendSampleShippingConfirmationTemplatePayload = {
  messaging_product: "whatsapp";
  to: string;
  type: "template";
  template: {
    name: string;
    language: {
      code: string;
      policy: string;
    };
    components: Array<{
      type: "body";
      parameters: Array<{
        type: "text";
        text: string;
      }>;
    }>;
  };
} & WbMetadata;

export type SendSampleIssueResolutionTemplatePayload = {
  messaging_product: "whatsapp";
  to: string;
  type: "template";
  template: {
    name: string;
    language: {
      code: string;
      policy: string;
    };
    components: Array<{
      type: "body";
      parameters: Array<{
        type: "text";
        text: string;
      }>;
    }>;
  };
} & WbMetadata;


/** Unión de todos los payloads válidos para Meta */
export type WhatsAppCloudMessage =
  | RegisterPhoneNumberPayload
  | SendTestMessagePayload
  | RegisterPhonePayload
  | RequestVerificationCodePayload
  | VerifyCodePayload
  | SetTwoStepVerificationCodePayload
  | OverrideCallbackUrlPayload
  | SendTextMessagePayload
  | SendReplyToTextMessagePayload
  | SendTextMessageWithPreviewUrlPayload
  | SendReplyWithReactionMessagePayload
  | SendImageMessageByIdPayload
  | SendReplyToImageMessageByIdPayload
  | SendImageMessageByUrlPayload
  | SendReplyToImageMessageByUrlPayload
  | SendAudioMessageByIdPayload
  | SendReplyToAudioMessageByIdPayload
  | SendAudioMessageByUrlPayload
  | SendReplyToAudioMessageByUrlPayload
  | SendDocumentMessageByIdPayload
  | SendReplyToDocumentMessageByIdPayload
  | SendDocumentMessageByUrlPayload
  | SendReplyToDocumentMessageByUrlPayload
  | SendStickerMessageByIdPayload
  | SendReplyToStickerMessageByIdPayload
  | SendStickerMessageByUrlPayload
  | SendReplyToStickerMessageByUrlPayload
  | SendVideoMessageByIdPayload
  | SendReplyToVideoMessageByIdPayload
  | SendVideoMessageByUrlPayload
  | SendReplyToVideoMessageByUrlPayload
  | SendContactMessagePayload
  | SendReplyToContactMessagePayload
  | SendLocationMessagePayload
  | SendReplyToLocationMessagePayload
  | SendMessageTemplateTextPayload
  | SendMessageTemplateMediaPayload
  | SendMessageTemplateInteractivePayload
  | SendListMessagePayload
  | SendReplyToListMessagePayload
  | SendReplyButtonPayload
  | MarkMessageAsReadPayload
  | SendSingleProductMessagePayload
  | SendMultiProductMessagePayload
  | SendCatalogMessagePayload
  | SendCatalogTemplateMessagePayload
  | CreateAuthenticationTemplateWOtpCopyCodeButtonPayload
  | CreateAuthenticationTemplateWOtpOneTapAutofillButtonPayload
  | CreateCatalogTemplatePayload
  | CreateMultiProductMessageTemplatePayload
  | CreateTemplateWTextHeaderTextBodyTextFooterAnd2QuickReplyButtonsPayload
  | CreateTemplateWImageHeaderTextBodyTextFooterAnd2CallToActionButtonsPayload
  | CreateTemplateWLocationHeaderTextBodyTextFooterAndAWebsiteButtonsPayload
  | CreateTemplateWDocumentHeaderTextBodyAPhoneNumberButtonAndAUrlButtonPayload
  | EditTemplatePayload
  | CreateFlowPayload
  | MigrateFlowsPayload
  | UpdateFlowJsonPayload
  | UpdateFlowMetadataPayload
  | SetEncryptionPublicKeyPayload
  | SendDraftFlowByNamePayload
  | SendDraftFlowByIdPayload
  | SendPublishedFlowByNamePayload
  | SendPublishedFlowByIdPayload
  | CreateFlowTemplateMessageByNamePayload
  | CreateFlowTemplateMessageByFlowJsonPayload
  | CreateFlowTemplateMessageByIdPayload
  | SendFlowTemplateMessagePayload
  | UploadImagePayload
  | UploadStickerPayload
  | UploadAudioPayload
  | DeleteMediaPayload
  | SendTypingIndicatorAndReadReceiptPayload
  | UpdateBusinessProfilePayload
  | SendOrderDetailsMessagePayload
  | SendOrderStatusMessagePayload
  | CreateQrCodePayload
  | UpdateMessageQrCodePayload
  | MigrateAccountPayload
  | BlockUserSPayload
  | UnblockUserSPayload
  | SendSampleTextMessagePayload
  | SendSampleShippingConfirmationTemplatePayload
  | SendSampleIssueResolutionTemplatePayload;


export class WhatsAppClient {
  private config: WhatsAppConfig;
  private readonly baseUrl = 'https://graph.facebook.com';

  constructor(config: WhatsAppConfig) {
    this.config = config;
  }

  private async request<T>(endpoint: string, method: string, body?: unknown): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const headers: HeadersInit = {
      'Authorization': `Bearer ${this.config.accessToken}`,
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error?.message || `Error HTTP ${response.status}`);
    }
    return data as T;
  }

  private async requestFormData<T>(endpoint: string, method: string, body: FormData): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const headers: HeadersInit = {
      'Authorization': `Bearer ${this.config.accessToken}`,
    };

    const response = await fetch(url, {
      method,
      headers,
      body: body as any,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error?.message || `Error HTTP ${response.status}`);
    }
    return data as T;
  }

  async downloadMediaByUrl(url: string): Promise<Buffer> {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${this.config.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to download Meta media: ${response.status} ${response.statusText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  }

  /**
   * Subscribe to your WABA
   * @method POST
   */
  async subscribeToYourWaba(): Promise<SubscribeToYourWabaResponse> {
    return this.request<SubscribeToYourWabaResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/subscribed_apps`, 'POST');
  }

  /**
   * Get Phone Number ID
   * @method GET
   */
  async getPhoneNumberId(): Promise<GetPhoneNumberIdResponse> {
    return this.request<GetPhoneNumberIdResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/phone_numbers`, 'GET');
  }

  /**
   * Register Phone Number
   * @method POST
   */
  async registerPhoneNumber(data: RegisterPhoneNumberPayload): Promise<RegisterPhoneNumberResponse> {
    return this.request<RegisterPhoneNumberResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/register`, 'POST', data);
  }

  /**
   * Send Test Message
   * @method POST
   */
  async sendTestMessage(data: SendTestMessagePayload): Promise<SendTestMessageResponse> {
    return this.request<SendTestMessageResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Debug Access Token
   * @method GET
   */
  async debugAccessToken(userAccessToken?: string): Promise<unknown> {
    return this.request<unknown>(`/${this.config.version || "v20.0"}/debug_token?input_token=${userAccessToken}`, 'GET');
  }

  /**
   * Get WABA
   * @method GET
   */
  async getWaba(): Promise<GetWabaResponse> {
    return this.request<GetWabaResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}`, 'GET');
  }

  /**
   * Get owned WABAs
   * @method GET
   */
  async getOwnedWabas(businessId: string): Promise<GetOwnedWabasResponse> {
    return this.request<GetOwnedWabasResponse>(`/${this.config.version || "v20.0"}/${businessId}/owned_whatsapp_business_accounts`, 'GET');
  }

  /**
   * Get shared WABAs
   * @method GET
   */
  async getSharedWabas(businessId: string): Promise<GetSharedWabasResponse> {
    return this.request<GetSharedWabasResponse>(`/${this.config.version || "v20.0"}/${businessId}/client_whatsapp_business_accounts`, 'GET');
  }

  /**
   * Register Phone
   * @method POST
   */
  async registerPhone(data: RegisterPhonePayload): Promise<RegisterPhoneResponse> {
    return this.request<RegisterPhoneResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/register`, 'POST', data);
  }

  /**
   * Deregister Phone
   * @method POST
   */
  async deregisterPhone(): Promise<DeregisterPhoneResponse> {
    return this.request<DeregisterPhoneResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/deregister`, 'POST');
  }

  /**
   * Get Phone Numbers
   * @method GET
   */
  async getPhoneNumbers(): Promise<GetPhoneNumbersResponse> {
    return this.request<GetPhoneNumbersResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/phone_numbers`, 'GET');
  }

  /**
   * Get Phone Number By ID
   * @method GET
   */
  async getPhoneNumberById(): Promise<GetPhoneNumberByIdResponse> {
    return this.request<GetPhoneNumberByIdResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}`, 'GET');
  }

  /**
   * Get Display Name Status (Beta)
   * @method GET
   */
  async getDisplayNameStatusBeta(): Promise<GetDisplayNameStatusBetaResponse> {
    return this.request<GetDisplayNameStatusBetaResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}?fields=name_status`, 'GET');
  }

  /**
   * Get Phone Numbers with Filtering (beta)
   * @method GET
   */
  async getPhoneNumbersWithFilteringBeta(): Promise<unknown> {
    return this.request<unknown>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/phone_numbers?fields=id,is_official_business_account,display_phone_number,verified_name&filtering=[{'field':'account_mode','operator':'EQUAL','value':'SANDBOX'}]`, 'GET');
  }

  /**
   * Request Verification Code
   * @method POST
   */
  async requestVerificationCode(data: RequestVerificationCodePayload): Promise<RequestVerificationCodeResponse> {
    return this.request<RequestVerificationCodeResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/request_code`, 'POST', data);
  }

  /**
   * Verify Code
   * @method POST
   */
  async verifyCode(data: VerifyCodePayload): Promise<VerifyCodeResponse> {
    return this.request<VerifyCodeResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/verify_code`, 'POST', data);
  }

  /**
   * Set Two-Step Verification Code
   * @method POST
   */
  async setTwoStepVerificationCode(data: SetTwoStepVerificationCodePayload): Promise<SetTwoStepVerificationCodeResponse> {
    return this.request<SetTwoStepVerificationCodeResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}`, 'POST', data);
  }

  /**
   * Subscribe to a WABA
   * @method POST
   */
  async subscribeToAWaba(): Promise<SubscribeToAWabaResponse> {
    return this.request<SubscribeToAWabaResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/subscribed_apps`, 'POST');
  }

  /**
   * Get All Subscriptions for a WABA
   * @method GET
   */
  async getAllSubscriptionsForAWaba(): Promise<GetAllSubscriptionsForAWabaResponse> {
    return this.request<GetAllSubscriptionsForAWabaResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/subscribed_apps`, 'GET');
  }

  /**
   * Unsubscribe from a WABA
   * @method DELETE
   */
  async unsubscribeFromAWaba(): Promise<UnsubscribeFromAWabaResponse> {
    return this.request<UnsubscribeFromAWabaResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/subscribed_apps`, 'DELETE');
  }

  /**
   * Override Callback URL
   * @method POST
   */
  async overrideCallbackUrl(data: OverrideCallbackUrlPayload): Promise<OverrideCallbackUrlResponse> {
    return this.request<OverrideCallbackUrlResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/subscribed_apps`, 'POST', data);
  }

  /**
   * Send Text Message
   * @method POST
   */
  async sendTextMessage(data: SendTextMessagePayload): Promise<SendTextMessageResponse> {
    return this.request<SendTextMessageResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Reply to Text Message
   * @method POST
   */
  async sendReplyToTextMessage(data: SendReplyToTextMessagePayload): Promise<SendReplyToTextMessageResponse> {
    return this.request<SendReplyToTextMessageResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Text Message with Preview URL
   * @method POST
   */
  async sendTextMessageWithPreviewUrl(data: SendTextMessageWithPreviewUrlPayload): Promise<SendTextMessageWithPreviewUrlResponse> {
    return this.request<SendTextMessageWithPreviewUrlResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Reply with Reaction Message
   * @method POST
   */
  async sendReplyWithReactionMessage(data: SendReplyWithReactionMessagePayload): Promise<SendReplyWithReactionMessageResponse> {
    return this.request<SendReplyWithReactionMessageResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Image Message by ID
   * @method POST
   */
  async sendImageMessageById(data: SendImageMessageByIdPayload): Promise<SendImageMessageByIdResponse> {
    return this.request<SendImageMessageByIdResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Reply to Image Message by ID
   * @method POST
   */
  async sendReplyToImageMessageById(data: SendReplyToImageMessageByIdPayload): Promise<SendReplyToImageMessageByIdResponse> {
    return this.request<SendReplyToImageMessageByIdResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Image Message by URL
   * @method POST
   */
  async sendImageMessageByUrl(data: SendImageMessageByUrlPayload): Promise<SendImageMessageByUrlResponse> {
    return this.request<SendImageMessageByUrlResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Reply to Image Message by URL
   * @method POST
   */
  async sendReplyToImageMessageByUrl(data: SendReplyToImageMessageByUrlPayload): Promise<SendReplyToImageMessageByUrlResponse> {
    return this.request<SendReplyToImageMessageByUrlResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Audio Message by ID
   * @method POST
   */
  async sendAudioMessageById(data: SendAudioMessageByIdPayload): Promise<SendAudioMessageByIdResponse> {
    return this.request<SendAudioMessageByIdResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Reply to Audio Message by ID
   * @method POST
   */
  async sendReplyToAudioMessageById(data: SendReplyToAudioMessageByIdPayload): Promise<SendReplyToAudioMessageByIdResponse> {
    return this.request<SendReplyToAudioMessageByIdResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Audio Message by URL
   * @method POST
   */
  async sendAudioMessageByUrl(data: SendAudioMessageByUrlPayload): Promise<SendAudioMessageByUrlResponse> {
    return this.request<SendAudioMessageByUrlResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Reply to Audio Message by URL
   * @method POST
   */
  async sendReplyToAudioMessageByUrl(data: SendReplyToAudioMessageByUrlPayload): Promise<SendReplyToAudioMessageByUrlResponse> {
    return this.request<SendReplyToAudioMessageByUrlResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Document Message by ID
   * @method POST
   */
  async sendDocumentMessageById(data: SendDocumentMessageByIdPayload): Promise<SendDocumentMessageByIdResponse> {
    return this.request<SendDocumentMessageByIdResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Reply to Document Message by ID
   * @method POST
   */
  async sendReplyToDocumentMessageById(data: SendReplyToDocumentMessageByIdPayload): Promise<SendReplyToDocumentMessageByIdResponse> {
    return this.request<SendReplyToDocumentMessageByIdResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Document Message by URL
   * @method POST
   */
  async sendDocumentMessageByUrl(data: SendDocumentMessageByUrlPayload): Promise<SendDocumentMessageByUrlResponse> {
    return this.request<SendDocumentMessageByUrlResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Reply to Document Message by URL
   * @method POST
   */
  async sendReplyToDocumentMessageByUrl(data: SendReplyToDocumentMessageByUrlPayload): Promise<SendReplyToDocumentMessageByUrlResponse> {
    return this.request<SendReplyToDocumentMessageByUrlResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Sticker Message by ID
   * @method POST
   */
  async sendStickerMessageById(data: SendStickerMessageByIdPayload): Promise<SendStickerMessageByIdResponse> {
    return this.request<SendStickerMessageByIdResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Reply to Sticker Message by ID
   * @method POST
   */
  async sendReplyToStickerMessageById(data: SendReplyToStickerMessageByIdPayload): Promise<SendReplyToStickerMessageByIdResponse> {
    return this.request<SendReplyToStickerMessageByIdResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Sticker Message by URL
   * @method POST
   */
  async sendStickerMessageByUrl(data: SendStickerMessageByUrlPayload): Promise<SendStickerMessageByUrlResponse> {
    return this.request<SendStickerMessageByUrlResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Reply to Sticker Message by URL
   * @method POST
   */
  async sendReplyToStickerMessageByUrl(data: SendReplyToStickerMessageByUrlPayload): Promise<SendReplyToStickerMessageByUrlResponse> {
    return this.request<SendReplyToStickerMessageByUrlResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Video Message by ID
   * @method POST
   */
  async sendVideoMessageById(data: SendVideoMessageByIdPayload): Promise<SendVideoMessageByIdResponse> {
    return this.request<SendVideoMessageByIdResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Reply to Video Message by ID
   * @method POST
   */
  async sendReplyToVideoMessageById(data: SendReplyToVideoMessageByIdPayload): Promise<SendReplyToVideoMessageByIdResponse> {
    return this.request<SendReplyToVideoMessageByIdResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Video Message by URL
   * @method POST
   */
  async sendVideoMessageByUrl(data: SendVideoMessageByUrlPayload): Promise<SendVideoMessageByUrlResponse> {
    return this.request<SendVideoMessageByUrlResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Reply to Video Message by URL
   * @method POST
   */
  async sendReplyToVideoMessageByUrl(data: SendReplyToVideoMessageByUrlPayload): Promise<SendReplyToVideoMessageByUrlResponse> {
    return this.request<SendReplyToVideoMessageByUrlResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Contact Message
   * @method POST
   */
  async sendContactMessage(data: SendContactMessagePayload): Promise<SendContactMessageResponse> {
    return this.request<SendContactMessageResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Reply to Contact Message
   * @method POST
   */
  async sendReplyToContactMessage(data: SendReplyToContactMessagePayload): Promise<SendReplyToContactMessageResponse> {
    return this.request<SendReplyToContactMessageResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Location Message
   * @method POST
   */
  async sendLocationMessage(data: SendLocationMessagePayload): Promise<SendLocationMessageResponse> {
    return this.request<SendLocationMessageResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Reply to Location Message
   * @method POST
   */
  async sendReplyToLocationMessage(data: SendReplyToLocationMessagePayload): Promise<SendReplyToLocationMessageResponse> {
    return this.request<SendReplyToLocationMessageResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Message Template Text
   * @method POST
   */
  async sendMessageTemplateText(data: SendMessageTemplateTextPayload): Promise<SendMessageTemplateTextResponse> {
    return this.request<SendMessageTemplateTextResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Message Template Media
   * @method POST
   */
  async sendMessageTemplateMedia(data: SendMessageTemplateMediaPayload): Promise<SendMessageTemplateMediaResponse> {
    return this.request<SendMessageTemplateMediaResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Message Template Interactive
   * @method POST
   */
  async sendMessageTemplateInteractive(data: SendMessageTemplateInteractivePayload): Promise<SendMessageTemplateInteractiveResponse> {
    return this.request<SendMessageTemplateInteractiveResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send List Message
   * @method POST
   */
  async sendListMessage(data: SendListMessagePayload): Promise<SendListMessageResponse> {
    return this.request<SendListMessageResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Reply to List Message
   * @method POST
   */
  async sendReplyToListMessage(data: SendReplyToListMessagePayload): Promise<SendReplyToListMessageResponse> {
    return this.request<SendReplyToListMessageResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Reply Button
   * @method POST
   */
  async sendReplyButton(data: SendReplyButtonPayload): Promise<SendReplyButtonResponse> {
    return this.request<SendReplyButtonResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Mark Message As Read
   * @method PUT
   */
  async markMessageAsRead(data: MarkMessageAsReadPayload): Promise<MarkMessageAsReadResponse> {
    return this.request<MarkMessageAsReadResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'PUT', data);
  }

  /**
   * Send Single Product Message
   * @method POST
   */
  async sendSingleProductMessage(data: SendSingleProductMessagePayload): Promise<SendSingleProductMessageResponse> {
    return this.request<SendSingleProductMessageResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Multi-Product Message
   * @method POST
   */
  async sendMultiProductMessage(data: SendMultiProductMessagePayload): Promise<SendMultiProductMessageResponse> {
    return this.request<SendMultiProductMessageResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Catalog Message
   * @method POST
   */
  async sendCatalogMessage(data: SendCatalogMessagePayload): Promise<SendCatalogMessageResponse> {
    return this.request<SendCatalogMessageResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Catalog Template Message
   * @method POST
   */
  async sendCatalogTemplateMessage(data: SendCatalogTemplateMessagePayload): Promise<SendCatalogTemplateMessageResponse> {
    return this.request<SendCatalogTemplateMessageResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Get template by ID (default fields)
   * @method GET
   */
  async getTemplateByIdDefaultFields(templateId: string): Promise<GetTemplateByIdDefaultFieldsResponse> {
    return this.request<GetTemplateByIdDefaultFieldsResponse>(`/${this.config.version || "v20.0"}/${templateId}`, 'GET');
  }

  /**
   * Get template by name (default fields)
   * @method GET
   */
  async getTemplateByNameDefaultFields(templateName?: string): Promise<GetTemplateByNameDefaultFieldsResponse> {
    return this.request<GetTemplateByNameDefaultFieldsResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/message_templates?name=${templateName}`, 'GET');
  }

  /**
   * Get all templates (default fields)
   * @method GET
   */
  async getAllTemplatesDefaultFields(): Promise<GetAllTemplatesDefaultFieldsResponse> {
    return this.request<GetAllTemplatesDefaultFieldsResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/message_templates`, 'GET');
  }

  /**
   * Get namespace
   * @method GET
   */
  async getNamespace(): Promise<GetNamespaceResponse> {
    return this.request<GetNamespaceResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}?fields=message_template_namespace`, 'GET');
  }

  /**
   * Create authentication template w/ OTP copy code button
   * @method POST
   */
  async createAuthenticationTemplateWOtpCopyCodeButton(data: CreateAuthenticationTemplateWOtpCopyCodeButtonPayload): Promise<CreateAuthenticationTemplateWOtpCopyCodeButtonResponse> {
    return this.request<CreateAuthenticationTemplateWOtpCopyCodeButtonResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/message_templates`, 'POST', data);
  }

  /**
   * Create authentication template w/ OTP one-tap autofill button
   * @method POST
   */
  async createAuthenticationTemplateWOtpOneTapAutofillButton(data: CreateAuthenticationTemplateWOtpOneTapAutofillButtonPayload): Promise<CreateAuthenticationTemplateWOtpOneTapAutofillButtonResponse> {
    return this.request<CreateAuthenticationTemplateWOtpOneTapAutofillButtonResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/message_templates`, 'POST', data);
  }

  /**
   * Create catalog template
   * @method POST
   */
  async createCatalogTemplate(data: CreateCatalogTemplatePayload): Promise<CreateCatalogTemplateResponse> {
    return this.request<CreateCatalogTemplateResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/message_templates`, 'POST', data);
  }

  /**
   * Create multi-product message template
   * @method POST
   */
  async createMultiProductMessageTemplate(data: CreateMultiProductMessageTemplatePayload): Promise<CreateMultiProductMessageTemplateResponse> {
    return this.request<CreateMultiProductMessageTemplateResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/message_templates`, 'POST', data);
  }

  /**
   * Create template w/ text header, text body, text footer, and 2 quick reply buttons
   * @method POST
   */
  async createTemplateWTextHeaderTextBodyTextFooterAnd2QuickReplyButtons(data: CreateTemplateWTextHeaderTextBodyTextFooterAnd2QuickReplyButtonsPayload): Promise<CreateTemplateWTextHeaderTextBodyTextFooterAnd2QuickReplyButtonsResponse> {
    return this.request<CreateTemplateWTextHeaderTextBodyTextFooterAnd2QuickReplyButtonsResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/message_templates`, 'POST', data);
  }

  /**
   * Create template w/ image header, text body, text footer, and 2 call-to-action buttons
   * @method POST
   */
  async createTemplateWImageHeaderTextBodyTextFooterAnd2CallToActionButtons(data: CreateTemplateWImageHeaderTextBodyTextFooterAnd2CallToActionButtonsPayload): Promise<CreateTemplateWImageHeaderTextBodyTextFooterAnd2CallToActionButtonsResponse> {
    return this.request<CreateTemplateWImageHeaderTextBodyTextFooterAnd2CallToActionButtonsResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/message_templates`, 'POST', data);
  }

  /**
   * Create template w/ location header, text body, text footer, and a website buttons
   * @method POST
   */
  async createTemplateWLocationHeaderTextBodyTextFooterAndAWebsiteButtons(data: CreateTemplateWLocationHeaderTextBodyTextFooterAndAWebsiteButtonsPayload): Promise<CreateTemplateWLocationHeaderTextBodyTextFooterAndAWebsiteButtonsResponse> {
    return this.request<CreateTemplateWLocationHeaderTextBodyTextFooterAndAWebsiteButtonsResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/message_templates`, 'POST', data);
  }

  /**
   * Create template w/ document header, text body, a phone number button, and a URL button
   * @method POST
   */
  async createTemplateWDocumentHeaderTextBodyAPhoneNumberButtonAndAUrlButton(data: CreateTemplateWDocumentHeaderTextBodyAPhoneNumberButtonAndAUrlButtonPayload): Promise<CreateTemplateWDocumentHeaderTextBodyAPhoneNumberButtonAndAUrlButtonResponse> {
    return this.request<CreateTemplateWDocumentHeaderTextBodyAPhoneNumberButtonAndAUrlButtonResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/message_templates`, 'POST', data);
  }

  /**
   * Edit template
   * @method POST
   */
  async editTemplate(templateId: string, data: EditTemplatePayload): Promise<EditTemplateResponse> {
    return this.request<EditTemplateResponse>(`/${this.config.version || "v20.0"}/${templateId}`, 'POST', data);
  }

  /**
   * Delete template by name
   * @method DELETE
   */
  async deleteTemplateByName(templateName?: string): Promise<DeleteTemplateByNameResponse> {
    return this.request<DeleteTemplateByNameResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/message_templates?name=${templateName}`, 'DELETE');
  }

  /**
   * Delete template by ID
   * @method DELETE
   */
  async deleteTemplateById(hsmId?: string, name?: string): Promise<DeleteTemplateByIdResponse> {
    return this.request<DeleteTemplateByIdResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/message_templates?hsm_id=${hsmId}&name=${name}`, 'DELETE');
  }

  /**
   * Create Flow
   * @method POST
   * @formData
   */
  async createFlow(data: CreateFlowPayload): Promise<CreateFlowResponse> {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (!key.startsWith('_') && value !== undefined) {
        formData.append(key, value as any);
      }
    });
    return this.requestFormData<CreateFlowResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/flows`, 'POST', formData);
  }

  /**
   * Migrate Flows
   * @method POST
   * @formData
   */
  async migrateFlows(data: MigrateFlowsPayload): Promise<MigrateFlowsResponse> {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (!key.startsWith('_') && value !== undefined) {
        formData.append(key, value as any);
      }
    });
    return this.requestFormData<MigrateFlowsResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/migrate_flows`, 'POST', formData);
  }

  /**
   * Get Flow
   * @method GET
   */
  async getFlow(flowId: string): Promise<GetFlowResponse> {
    return this.request<GetFlowResponse>(`/${this.config.version || "v20.0"}/${flowId}?fields=id,name,categories,preview,status,validation_errors,json_version,data_api_version,data_channel_uri,health_status,whatsapp_business_account,application`, 'GET');
  }

  /**
   * Get Preview URL
   * @method GET
   */
  async getPreviewUrl(flowId: string): Promise<GetPreviewUrlResponse> {
    return this.request<GetPreviewUrlResponse>(`/${this.config.version || "v20.0"}/${flowId}?fields=preview.invalidate(false)`, 'GET');
  }

  /**
   * List Flows
   * @method GET
   */
  async listFlows(): Promise<ListFlowsResponse> {
    return this.request<ListFlowsResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/flows`, 'GET');
  }

  /**
   * Update Flow JSON
   * @method POST
   * @formData
   */
  async updateFlowJson(flowId: string, data: UpdateFlowJsonPayload): Promise<UpdateFlowJsonResponse> {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (!key.startsWith('_') && value !== undefined) {
        formData.append(key, value as any);
      }
    });
    return this.requestFormData<UpdateFlowJsonResponse>(`/${this.config.version || "v20.0"}/${flowId}/assets`, 'POST', formData);
  }

  /**
   * Publish Flow
   * @method POST
   */
  async publishFlow(flowId: string): Promise<PublishFlowResponse> {
    return this.request<PublishFlowResponse>(`/${this.config.version || "v20.0"}/${flowId}/publish`, 'POST');
  }

  /**
   * Update Flow Metadata
   * @method POST
   * @formData
   */
  async updateFlowMetadata(flowId: string, data: UpdateFlowMetadataPayload): Promise<UpdateFlowMetadataResponse> {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (!key.startsWith('_') && value !== undefined) {
        formData.append(key, value as any);
      }
    });
    return this.requestFormData<UpdateFlowMetadataResponse>(`/${this.config.version || "v20.0"}/${flowId}`, 'POST', formData);
  }

  /**
   * List Assets (Get Flow JSON URL)
   * @method GET
   */
  async listAssetsGetFlowJsonUrl(flowId: string): Promise<ListAssetsGetFlowJsonUrlResponse> {
    return this.request<ListAssetsGetFlowJsonUrlResponse>(`/${this.config.version || "v20.0"}/${flowId}/assets`, 'GET');
  }

  /**
   * Deprecate Flow
   * @method POST
   */
  async deprecateFlow(flowId: string): Promise<DeprecateFlowResponse> {
    return this.request<DeprecateFlowResponse>(`/${this.config.version || "v20.0"}/${flowId}/deprecate`, 'POST');
  }

  /**
   * Delete Flow
   * @method DELETE
   */
  async deleteFlow(flowId: string): Promise<DeleteFlowResponse> {
    return this.request<DeleteFlowResponse>(`/${this.config.version || "v20.0"}/${flowId}`, 'DELETE');
  }

  /**
   * Set Encryption Public Key
   * @method POST
   * @formData
   */
  async setEncryptionPublicKey(data: SetEncryptionPublicKeyPayload): Promise<SetEncryptionPublicKeyResponse> {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (!key.startsWith('_') && value !== undefined) {
        formData.append(key, value as any);
      }
    });
    return this.requestFormData<SetEncryptionPublicKeyResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/whatsapp_business_encryption`, 'POST', formData);
  }

  /**
   * Get Encryption Public Key
   * @method GET
   */
  async getEncryptionPublicKey(): Promise<GetEncryptionPublicKeyResponse> {
    return this.request<GetEncryptionPublicKeyResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/whatsapp_business_encryption`, 'GET');
  }

  /**
   * Send Draft Flow by Name
   * @method POST
   */
  async sendDraftFlowByName(data: SendDraftFlowByNamePayload): Promise<SendDraftFlowByNameResponse> {
    return this.request<SendDraftFlowByNameResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Draft Flow by ID
   * @method POST
   */
  async sendDraftFlowById(data: SendDraftFlowByIdPayload): Promise<SendDraftFlowByIdResponse> {
    return this.request<SendDraftFlowByIdResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Published Flow by Name
   * @method POST
   */
  async sendPublishedFlowByName(data: SendPublishedFlowByNamePayload): Promise<SendPublishedFlowByNameResponse> {
    return this.request<SendPublishedFlowByNameResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Published Flow by ID
   * @method POST
   */
  async sendPublishedFlowById(data: SendPublishedFlowByIdPayload): Promise<SendPublishedFlowByIdResponse> {
    return this.request<SendPublishedFlowByIdResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Create Flow Template Message by Name
   * @method POST
   */
  async createFlowTemplateMessageByName(data: CreateFlowTemplateMessageByNamePayload): Promise<CreateFlowTemplateMessageByNameResponse> {
    return this.request<CreateFlowTemplateMessageByNameResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/message_templates`, 'POST', data);
  }

  /**
   * Create Flow Template Message by Flow JSON
   * @method POST
   */
  async createFlowTemplateMessageByFlowJson(data: CreateFlowTemplateMessageByFlowJsonPayload): Promise<CreateFlowTemplateMessageByFlowJsonResponse> {
    return this.request<CreateFlowTemplateMessageByFlowJsonResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/message_templates`, 'POST', data);
  }

  /**
   * Create Flow Template Message by ID
   * @method POST
   */
  async createFlowTemplateMessageById(data: CreateFlowTemplateMessageByIdPayload): Promise<CreateFlowTemplateMessageByIdResponse> {
    return this.request<CreateFlowTemplateMessageByIdResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}/message_templates`, 'POST', data);
  }

  /**
   * Send Flow Template Message
   * @method POST
   */
  async sendFlowTemplateMessage(data: SendFlowTemplateMessagePayload): Promise<SendFlowTemplateMessageResponse> {
    return this.request<SendFlowTemplateMessageResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Get Endpoint Request Count Metric
   * @method GET
   */
  async getEndpointRequestCountMetric(flowId: string): Promise<GetEndpointRequestCountMetricResponse> {
    return this.request<GetEndpointRequestCountMetricResponse>(`/${this.config.version || "v20.0"}/${flowId}?fields=metric.name(ENDPOINT_REQUEST_COUNT).granularity(DAY).since(2024-01-28).until(2024-01-30)`, 'GET');
  }

  /**
   * Get Endpoint Request Error Metric
   * @method GET
   */
  async getEndpointRequestErrorMetric(flowId: string): Promise<GetEndpointRequestErrorMetricResponse> {
    return this.request<GetEndpointRequestErrorMetricResponse>(`/${this.config.version || "v20.0"}/${flowId}?fields=metric.name(ENDPOINT_REQUEST_ERROR).granularity(DAY).since(2024-01-28).until(2024-01-30)`, 'GET');
  }

  /**
   * Get Endpoint Request Error Rate Metric
   * @method GET
   */
  async getEndpointRequestErrorRateMetric(flowId: string): Promise<GetEndpointRequestErrorRateMetricResponse> {
    return this.request<GetEndpointRequestErrorRateMetricResponse>(`/${this.config.version || "v20.0"}/${flowId}?fields=metric.name(ENDPOINT_REQUEST_ERROR_RATE).granularity(LIFETIME).since(2024-01-28).until(2024-01-30)`, 'GET');
  }

  /**
   * Get Endpoint Request Latencies Metric
   * @method GET
   */
  async getEndpointRequestLatenciesMetric(flowId: string): Promise<GetEndpointRequestLatenciesMetricResponse> {
    return this.request<GetEndpointRequestLatenciesMetricResponse>(`/${this.config.version || "v20.0"}/${flowId}?fields=metric.name(ENDPOINT_REQUEST_LATENCY_SECONDS_CEIL).granularity(DAY).since(2024-01-28).until(2024-01-30)`, 'GET');
  }

  /**
   * Get Endpoint Availability Metric
   * @method GET
   */
  async getEndpointAvailabilityMetric(flowId: string): Promise<GetEndpointAvailabilityMetricResponse> {
    return this.request<GetEndpointAvailabilityMetricResponse>(`/${this.config.version || "v20.0"}/${flowId}?fields=metric.name(ENDPOINT_AVAILABILITY).granularity(DAY).since(2024-01-28).until(2024-01-30)`, 'GET');
  }

  /**
   * Upload Image
   * @method POST
   * @formData
   */
  async uploadImage(data: UploadImagePayload): Promise<UploadImageResponse> {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (!key.startsWith('_') && value !== undefined) {
        formData.append(key, value as any);
      }
    });
    return this.requestFormData<UploadImageResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/media`, 'POST', formData);
  }

  /**
   * Upload Sticker
   * @method POST
   * @formData
   */
  async uploadSticker(data: UploadStickerPayload): Promise<UploadStickerResponse> {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (!key.startsWith('_') && value !== undefined) {
        formData.append(key, value as any);
      }
    });
    return this.requestFormData<UploadStickerResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/media`, 'POST', formData);
  }

  /**
   * Upload Audio
   * @method POST
   * @formData (auto-detected from @ syntax)
   */
  async uploadAudio(data: UploadAudioPayload): Promise<UploadAudioResponse> {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (!key.startsWith('_') && value !== undefined) {
        formData.append(key, value as any);
      }
    });
    return this.requestFormData<UploadAudioResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/media`, 'POST', formData);
  }

  /**
   * Retrieve Media URL
   * @method GET
   */
  async retrieveMediaUrl(mediaId: string, phoneNumberId?: string): Promise<RetrieveMediaUrlResponse> {
    return this.request<RetrieveMediaUrlResponse>(`/${this.config.version || "v20.0"}/${mediaId}?phone_number_id=${phoneNumberId || this.config.phoneNumberId || ""}`, 'GET');
  }

  /**
   * Delete Media
   * @method DELETE
   * @formData
   */
  async deleteMedia(mediaId: string, data: DeleteMediaPayload, phoneNumberId?: string): Promise<DeleteMediaResponse> {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (!key.startsWith('_') && value !== undefined) {
        formData.append(key, value as any);
      }
    });
    return this.requestFormData<DeleteMediaResponse>(`/${this.config.version || "v20.0"}/${mediaId}/?phone_number_id=${phoneNumberId || this.config.phoneNumberId || ""}`, 'DELETE', formData);
  }

  /**
   * Download Media
   * @method GET
   */
  async downloadMedia(mediaUrl: string): Promise<unknown> {
    return this.request<unknown>(`/${this.config.version || "v20.0"}/${mediaUrl}`, 'GET');
  }

  /**
   * Send typing indicator and read receipt
   * @method POST
   */
  async sendTypingIndicatorAndReadReceipt(data: SendTypingIndicatorAndReadReceiptPayload): Promise<SendTypingIndicatorAndReadReceiptResponse> {
    return this.request<SendTypingIndicatorAndReadReceiptResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Resumable Upload - Create an Upload Session
   * @method POST
   */
  async resumableUploadCreateAnUploadSession(yourFileLength?: number): Promise<ResumableUploadCreateAnUploadSessionResponse> {
    return this.request<ResumableUploadCreateAnUploadSessionResponse>(`/${this.config.version || "v20.0"}/app/uploads/?file_length=${yourFileLength}&file_type=image/jpeg&file_name=myprofile.jpg`, 'POST');
  }

  /**
   * Resumable Upload - Upload File Data
   * @method POST
   */
  async resumableUploadUploadFileData(uploadId: string): Promise<ResumableUploadUploadFileDataResponse> {
    return this.request<ResumableUploadUploadFileDataResponse>(`/${this.config.version || "v20.0"}/${uploadId}`, 'POST');
  }

  /**
   * Resumable Upload - Query File Upload Status
   * @method GET
   */
  async resumableUploadQueryFileUploadStatus(uploadId: string): Promise<ResumableUploadQueryFileUploadStatusResponse> {
    return this.request<ResumableUploadQueryFileUploadStatusResponse>(`/${this.config.version || "v20.0"}/${uploadId}`, 'GET');
  }

  /**
   * Get Business Profile
   * @method GET
   */
  async getBusinessProfile(): Promise<GetBusinessProfileResponse> {
    return this.request<GetBusinessProfileResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/whatsapp_business_profile`, 'GET');
  }

  /**
   * Update Business Profile
   * @method POST
   */
  async updateBusinessProfile(data: UpdateBusinessProfilePayload): Promise<UpdateBusinessProfileResponse> {
    return this.request<UpdateBusinessProfileResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/whatsapp_business_profile`, 'POST', data);
  }

  /**
   * Get commerce settings
   * @method GET
   */
  async getCommerceSettings(): Promise<GetCommerceSettingsResponse> {
    return this.request<GetCommerceSettingsResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/whatsapp_commerce_settings`, 'GET');
  }

  /**
   * Set or update commerce settings
   * @method POST
   */
  async setOrUpdateCommerceSettings(): Promise<SetOrUpdateCommerceSettingsResponse> {
    return this.request<SetOrUpdateCommerceSettingsResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/whatsapp_commerce_settings?is_cart_enabled=true&is_catalog_visible=true`, 'POST');
  }

  /**
   * Send Order Details Message
   * @method POST
   */
  async sendOrderDetailsMessage(data: SendOrderDetailsMessagePayload): Promise<SendOrderDetailsMessageResponse> {
    return this.request<SendOrderDetailsMessageResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Order Status Message
   * @method POST
   */
  async sendOrderStatusMessage(data: SendOrderStatusMessagePayload): Promise<SendOrderStatusMessageResponse> {
    return this.request<SendOrderStatusMessageResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Get QR code
   * @method GET
   */
  async getQrCode(qrCodeId: string): Promise<GetQrCodeResponse> {
    return this.request<GetQrCodeResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/message_qrdls/${qrCodeId}`, 'GET');
  }

  /**
   * Get all QR codes (default fields)
   * @method GET
   */
  async getAllQrCodesDefaultFields(): Promise<GetAllQrCodesDefaultFieldsResponse> {
    return this.request<GetAllQrCodesDefaultFieldsResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/message_qrdls`, 'GET');
  }

  /**
   * Get all QR codes (specific fields)
   * @method GET
   */
  async getAllQrCodesSpecificFields(): Promise<GetAllQrCodesSpecificFieldsResponse> {
    return this.request<GetAllQrCodesSpecificFieldsResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/message_qrdls?fields=code,prefilled_message,qr_image_url.format(SVG)`, 'GET');
  }

  /**
   * Get QR code SVG image URL
   * @method GET
   */
  async getQrCodeSvgImageUrl(qrCodeId?: string): Promise<GetQrCodeSvgImageUrlResponse> {
    return this.request<GetQrCodeSvgImageUrlResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/message_qrdls?fields=prefilled_message,deep_link_url,qr_image_url.format(SVG)&code=${qrCodeId}`, 'GET');
  }

  /**
   * Get QR code PNG image URL
   * @method GET
   */
  async getQrCodePngImageUrl(qrCodeId?: string): Promise<GetQrCodePngImageUrlResponse> {
    return this.request<GetQrCodePngImageUrlResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/message_qrdls?fields=prefilled_message,deep_link_url,qr_image_url.format(PNG)&code=${qrCodeId}`, 'GET');
  }

  /**
   * Create QR code
   * @method POST
   */
  async createQrCode(data: CreateQrCodePayload): Promise<CreateQrCodeResponse> {
    return this.request<CreateQrCodeResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/message_qrdls`, 'POST', data);
  }

  /**
   * Update Message QR Code.
   * @method POST
   */
  async updateMessageQrCode(data: UpdateMessageQrCodePayload): Promise<UpdateMessageQrCodeResponse> {
    return this.request<UpdateMessageQrCodeResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/message_qrdls`, 'POST', data);
  }

  /**
   * Delete QR code
   * @method DELETE
   */
  async deleteQrCode(qrCodeId: string): Promise<DeleteQrCodeResponse> {
    return this.request<DeleteQrCodeResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/message_qrdls/${qrCodeId}`, 'DELETE');
  }

  /**
   * Get Business Portfolio (Specific Fields)
   * @method GET
   */
  async getBusinessPortfolioSpecificFields(businessId: string): Promise<GetBusinessPortfolioSpecificFieldsResponse> {
    return this.request<GetBusinessPortfolioSpecificFieldsResponse>(`/${this.config.version || "v20.0"}/${businessId}?fields=id,name,timezone_id`, 'GET');
  }

  /**
   * Get analytics
   * @method GET
   */
  async getAnalytics(): Promise<GetAnalyticsResponse> {
    return this.request<GetAnalyticsResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}?fields=analytics.start(1680503760).end(1680564980).granularity(DAY).phone_numbers([]).country_codes(["US", "BR"])`, 'GET');
  }

  /**
   * Get conversation analytics
   * @method GET
   */
  async getConversationAnalytics(): Promise<GetConversationAnalyticsResponse> {
    return this.request<GetConversationAnalyticsResponse>(`/${this.config.version || "v20.0"}/${this.config.wabaId}?fields=conversation_analytics.start(1656661480).end(1674859480).granularity(MONTHLY).conversation_directions(["business_initiated"]).dimensions(["conversation_type", "conversation_direction"])`, 'GET');
  }

  /**
   * Get credit lines
   * @method GET
   */
  async getCreditLines(businessId: string): Promise<GetCreditLinesResponse> {
    return this.request<GetCreditLinesResponse>(`/${this.config.version || "v20.0"}/${businessId}/extendedcredits`, 'GET');
  }

  /**
   * Migrate Account
   * @method POST
   */
  async migrateAccount(data: MigrateAccountPayload): Promise<MigrateAccountResponse> {
    return this.request<MigrateAccountResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/register`, 'POST', data);
  }

  /**
   * Get blocked users
   * @method GET
   */
  async getBlockedUsers(): Promise<GetBlockedUsersResponse> {
    return this.request<GetBlockedUsersResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/block_users`, 'GET');
  }

  /**
   * Block user(s)
   * @method POST
   */
  async blockUserS(data: BlockUserSPayload): Promise<BlockUserSResponse> {
    return this.request<BlockUserSResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/block_users`, 'POST', data);
  }

  /**
   * Unblock user(s)
   * @method DELETE
   */
  async unblockUserS(data: UnblockUserSPayload): Promise<UnblockUserSResponse> {
    return this.request<UnblockUserSResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/block_users`, 'DELETE', data);
  }

  /**
   * Get India-based business compliance info
   * @method GET
   */
  async getIndiaBasedBusinessComplianceInfo(): Promise<GetIndiaBasedBusinessComplianceInfoResponse> {
    return this.request<GetIndiaBasedBusinessComplianceInfoResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/business_compliance_info`, 'GET');
  }

  /**
   * Send Sample Text Message
   * @method POST
   */
  async sendSampleTextMessage(data: SendSampleTextMessagePayload): Promise<SendSampleTextMessageResponse> {
    return this.request<SendSampleTextMessageResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Sample Shipping Confirmation Template
   * @method POST
   */
  async sendSampleShippingConfirmationTemplate(data: SendSampleShippingConfirmationTemplatePayload): Promise<SendSampleShippingConfirmationTemplateResponse> {
    return this.request<SendSampleShippingConfirmationTemplateResponse>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

  /**
   * Send Sample Issue Resolution Template
   * @method POST
   */
  async sendSampleIssueResolutionTemplate(data: SendSampleIssueResolutionTemplatePayload): Promise<unknown> {
    return this.request<unknown>(`/${this.config.version || "v20.0"}/${this.config.phoneNumberId}/messages`, 'POST', data);
  }

}