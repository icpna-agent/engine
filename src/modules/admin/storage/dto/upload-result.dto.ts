import { ApiProperty } from '@nestjs/swagger';

export class FreeImageFileDto {
  @ApiProperty()
  filename!: string;

  @ApiProperty()
  name!: string;

  @ApiProperty()
  mime!: string;

  @ApiProperty()
  extension!: string;

  @ApiProperty()
  url!: string;

  @ApiProperty({ required: false })
  size?: number;
}

export class FreeImageResultDto {
  @ApiProperty()
  name!: string;

  @ApiProperty()
  extension!: string;

  @ApiProperty()
  width!: number;

  @ApiProperty()
  height!: number;

  @ApiProperty()
  size!: number;

  @ApiProperty()
  time!: number;

  @ApiProperty()
  expiration!: number;

  @ApiProperty()
  likes!: number;

  @ApiProperty({ required: false, nullable: true })
  description!: string | null;

  @ApiProperty()
  original_filename!: string;

  @ApiProperty()
  is_animated!: number;

  @ApiProperty()
  id_encoded!: string;

  @ApiProperty()
  extension_name!: string;

  @ApiProperty()
  size_formatted!: string;

  @ApiProperty()
  filename!: string;

  @ApiProperty()
  url!: string;

  @ApiProperty()
  url_short!: string;

  @ApiProperty()
  url_seo!: string;

  @ApiProperty()
  url_viewer!: string;

  @ApiProperty()
  url_viewer_preview!: string;

  @ApiProperty()
  url_viewer_thumb!: string;

  @ApiProperty({ type: FreeImageFileDto })
  image!: FreeImageFileDto;

  @ApiProperty({ type: FreeImageFileDto })
  thumb!: FreeImageFileDto;

  @ApiProperty({ type: FreeImageFileDto })
  medium!: FreeImageFileDto;

  @ApiProperty()
  display_url!: string;

  @ApiProperty()
  display_width!: number;

  @ApiProperty()
  display_height!: number;

  @ApiProperty()
  views_label!: string;

  @ApiProperty()
  likes_label!: string;

  @ApiProperty()
  how_long_ago!: string;

  @ApiProperty()
  date_fixed_peer!: string;

  @ApiProperty()
  title!: string;

  @ApiProperty()
  title_truncated!: string;

  @ApiProperty()
  title_truncated_html!: string;

  @ApiProperty()
  is_use_loader!: boolean;
}

export class UploadResultDto {
  @ApiProperty()
  success!: boolean;

  @ApiProperty({ type: FreeImageResultDto })
  data!: FreeImageResultDto;
}

export class UploadImageMetaResultDto {
  @ApiProperty()
  success!: boolean;

  @ApiProperty()
  url!: string;

  @ApiProperty({ required: false, nullable: true })
  metaMediaId!: string | null;
}

export class UploadAudioMetaResultDto {
  @ApiProperty()
  success!: boolean;

  @ApiProperty()
  url!: string;

  @ApiProperty({ required: false, nullable: true })
  metaMediaId!: string | null;
}
