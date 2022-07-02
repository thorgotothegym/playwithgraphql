interface ContributorsType {
  ID: string;
  Name: string;
}

export type DocumentConstructorArgs = {
  Attachments: string[];
  Contributors: ContributorsType;
  CreatedAt: string;
  ID: string;
  Title: string;
  UpdatedAt: string;
  Version: string;
};

export default class Document {
  readonly Attachments: string[];
  readonly Contributors: ContributorsType;
  readonly CreatedAt: string;
  readonly ID: string;
  readonly Title: string;
  readonly UpdatedAt: string;
  readonly Version: string;

  constructor({
    Attachments,
    Contributors,
    CreatedAt,
    ID,
    Title,
    UpdatedAt,
    Version,
  }: DocumentConstructorArgs) {
    this.Attachments = Attachments;
    this.Contributors = Contributors;
    this.CreatedAt = CreatedAt;
    this.ID = ID;
    this.Title = Title;
    this.UpdatedAt = UpdatedAt;
    this.Version = Version;
  }
}
