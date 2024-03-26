import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc-utils";

export default function TagNamePage({ params: { tagsName } }) {
  const docs = getDocuments();
  const matchedDocumnts = getDocumentsByTag(docs, tagsName);
  return <ContentDisplay id={matchedDocumnts[0].id} />;
}
