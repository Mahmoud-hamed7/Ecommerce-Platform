import CategoryGrid from "../components/CategoryGrid";


export default function Categories() {
  return (
    <section className="w-full max-w-7xl mx-auto py-10 px-4">
      {/* هنا هتستخدم الكومبوننت اللي بيعرض الصور الكبيرة للأقسام */}
      <CategoryGrid />
    </section>
  );
}