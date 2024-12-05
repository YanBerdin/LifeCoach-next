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
    content: `La méditation est une pratique millénaire qui peut transformer votre vie quotidienne. Voici cinq techniques simples pour débuter :

1. La Respiration Consciente
Commencez par vous asseoir confortablement et concentrez-vous sur votre respiration. Observez simplement le flux et le reflux naturel de votre souffle, sans chercher à le modifier. Cette technique fondamentale aide à ancrer l'esprit dans le moment présent.

2. Le Balayage Corporel
Allongez-vous et portez progressivement votre attention sur chaque partie de votre corps, des orteils jusqu'à la tête. Cette pratique développe la conscience corporelle et favorise la relaxation profonde.

3. La Méditation Guidée
Utilisez des applications ou des enregistrements audio pour vous guider dans votre pratique. C'est une excellente façon de maintenir votre concentration et d'apprendre différentes techniques.

4. La Marche Méditative
Pratiquez la pleine conscience en marchant lentement, en étant attentif à chaque mouvement et sensation. Cette technique est particulièrement utile pour ceux qui ont du mal à rester assis.

5. La Méditation des Sons
Écoutez attentivement les sons qui vous entourent sans les juger. Cette pratique développe votre capacité à rester présent et à accepter ce qui est.

Conseils pour Débuter :
- Commencez par des sessions courtes de 5-10 minutes
- Choisissez un moment régulier dans la journée
- Créez un espace calme et confortable
- Soyez patient et bienveillant envers vous-même
- Maintenez une pratique régulière

La méditation est un voyage personnel, et il n'y a pas de "bonne" façon de méditer. L'important est de trouver la technique qui vous convient et de pratiquer régulièrement.`,
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
    content: `La mentalité de croissance est un concept développé par Carol Dweck qui peut transformer votre approche de l'apprentissage et du développement personnel.

Qu'est-ce que la Mentalité de Croissance ?
Une mentalité de croissance est la conviction que nos capacités et notre intelligence peuvent être développées grâce à l'effort, l'apprentissage et la persévérance. À l'opposé, une mentalité fixe considère que nos qualités sont innées et immuables.

Les Principes Clés :

1. Embrassez les Défis
Les défis sont des opportunités d'apprentissage et de croissance. Au lieu de les éviter, voyez-les comme des chances de vous développer.

2. Persistez Face aux Obstacles
Les obstacles ne sont pas des échecs, mais des étapes normales du processus d'apprentissage. La persévérance est essentielle.

3. Valorisez l'Effort
L'effort est le chemin vers la maîtrise. Concentrez-vous sur le processus plutôt que sur les résultats immédiats.

4. Apprenez des Critiques
Les retours constructifs sont précieux pour votre développement. Utilisez-les comme des informations utiles pour vous améliorer.

5. Inspirez-vous du Succès des Autres
Le succès des autres peut être une source d'inspiration et d'apprentissage plutôt que de comparaison négative.

Comment Développer cette Mentalité :
- Remettez en question vos croyances limitantes
- Célébrez vos progrès, même les plus petits
- Adoptez le mot "encore" (je n'y arrive pas... encore)
- Fixez-vous des objectifs d'apprentissage
- Cultivez la curiosité

La mentalité de croissance est un outil puissant pour atteindre vos objectifs et réaliser votre potentiel. C'est un changement qui demande du temps et de la pratique, mais qui peut transformer profondément votre vie.`,
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
    content: `La communication authentique est essentielle dans nos relations personnelles et professionnelles. Elle permet de créer des liens profonds et durables basés sur la confiance et la compréhension mutuelle.

Les Piliers de la Communication Authentique :

1. L'Écoute Active
- Soyez pleinement présent
- Évitez de préparer votre réponse pendant que l'autre parle
- Posez des questions de clarification
- Montrez votre intérêt par votre langage corporel

2. L'Expression Sincère
- Parlez avec votre cœur
- Exprimez vos besoins et émotions clairement
- Utilisez le "je" plutôt que le "tu" accusateur
- Restez fidèle à vos valeurs

3. La Bienveillance
- Cultivez l'empathie
- Évitez les jugements
- Acceptez les différences
- Cherchez à comprendre avant d'être compris

4. La Congruence
- Alignez vos paroles avec vos actes
- Soyez cohérent dans votre communication verbale et non-verbale
- Assumez vos choix et décisions

Techniques Pratiques :

1. La Communication Non-Violente (CNV)
- Observation des faits
- Expression des sentiments
- Expression des besoins
- Formulation d'une demande claire

2. Le Feedback Constructif
- Choisissez le bon moment
- Soyez spécifique
- Proposez des solutions
- Restez ouvert au dialogue

3. La Gestion des Conflits
- Abordez les désaccords calmement
- Cherchez des solutions gagnant-gagnant
- Restez focalisé sur le problème, pas sur la personne
- Acceptez les compromis

La communication authentique demande de la pratique et de la patience. C'est un investissement qui améliore toutes vos relations et contribue à créer un environnement plus harmonieux.`,
    author: "Marie Laurent",
    date: "2024-03-05",
    readingTime: "6 min",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
    category: "Communication"
  }
];