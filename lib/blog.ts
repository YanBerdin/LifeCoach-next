export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readingTime: string;
  imageUrl: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Techniques de Méditation pour Débutants",
    excerpt: "Découvrez des techniques simples pour commencer votre pratique de méditation quotidienne.",
    content: "La méditation est une pratique millénaire qui peut transformer votre vie...",
    author: "Sophie Martin",
    date: "2024-03-15",
    readingTime: "5 min",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    category: "Méditation"
  },
  {
    id: "2",
    title: "Comment Développer une Mentalité de Croissance",
    excerpt: "Apprenez à cultiver une mentalité orientée vers la croissance et le développement personnel.",
    content: "La mentalité de croissance est un concept développé par Carol Dweck...",
    author: "Thomas Dubois",
    date: "2024-03-10",
    readingTime: "7 min",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    category: "Développement Personnel"
  },
  {
    id: "3",
    title: "Les Clés d'une Communication Authentique",
    excerpt: "Découvrez les principes fondamentaux pour une communication sincère et efficace.",
    content: "La communication authentique est essentielle dans nos relations...",
    author: "Marie Laurent",
    date: "2024-03-05",
    readingTime: "6 min",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
    category: "Communication"
  }
];