import api from "../../../../common/infraestructure/api";
import Document from "../../../domain/entities/Document";
import restoreDocument from "../../builders/restoreDocument";

const getDocument = async (): Promise<Document> => {
  const documentRequest = await api.get(`http://localhost:8080/documents`);

  return restoreDocument(documentRequest.data);
};

export default getDocument;
