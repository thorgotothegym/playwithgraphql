import getDocument from "../../../infraestruture/repositories/getDocuments";

const findDocument = async () => {
  return await getDocument();
};

export default findDocument;
