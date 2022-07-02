export type NotificationConstructorArgs = {
  Timestamp: string;
  UserID: string;
  UserName: string;
  DocumentID: string;
  DocumentTitle: string;
};

export default class Notification {
  readonly Timestamp: string;
  readonly UserID: string;
  readonly UserName: string;
  readonly DocumentID: string;
  readonly DocumentTitle: string;

  constructor({
    Timestamp,
    UserID,
    UserName,
    DocumentID,
    DocumentTitle,
  }: NotificationConstructorArgs) {
    this.Timestamp = Timestamp;
    this.UserID = UserID;
    this.UserName = UserName;
    this.DocumentID = DocumentID;
    this.DocumentTitle = DocumentTitle;
  }
}
