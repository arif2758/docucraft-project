import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc-utils";

export default function CategoriesNamePage({ params: { categoriesName } }) {
  const docs = getDocuments();
  const matchedDocumnts = getDocumentsByCategory(docs, categoriesName);
  return <ContentDisplay id={matchedDocumnts[0].id} />;
}
