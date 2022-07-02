import Document from "../../../domain/entities/Document";

const restoreDocument = ({
  Attachments,
  Contributors,
  CreatedAt,
  ID,
  Title,
  UpdatedAt,
  Version,
}: Document) => {
  return new Document({
    Attachments: Attachments,
    Contributors: Contributors,
    CreatedAt: CreatedAt,
    ID: ID,
    Title: Title,
    UpdatedAt: UpdatedAt,
    Version: Version,
  });
};

export default restoreDocument;
