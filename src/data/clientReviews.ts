export type ClientReview = { author: string; about: string; text: string };

/** Real Google reviews, word for word. "[…]" marks a passage left out because it names a town. */
export const CLIENT_REVIEWS = {
  yerli: { author: "ayse yerli", about: "dératisation", text: "[…] Société dynamique et efficace je recommande .. Personne disponible et très professionnel. Les tarifs sont corrects." },
  rigny: { author: "Laurent Rigny", about: "dératisation", text: "[…] Société dynamique et efficace je recommande 👍👍" },
  jc: { author: "Jean Christophe “JC” F", about: "problème de nuisibles", text: "Appelé pour un problème de nuisible(s)\nBon contact, agréable, et disponible\nDe plus c'est un local, un détail qui a son importance. Vous pouvez y aller les yeux fermés" },
  soucelier: { author: "Olivier Soucelier", about: "nuisibles", text: "Super satisfait du travail fourni par la société GF Nuisible . Patron à l’écoute , bienveillant , explique bien se qu’il va faire  et prend des nouvelles après son passage. Je recommande ." },
  mathieu: { author: "Angélique Mathieu", about: "nuisibles", text: "Une prestation absolument au top, réalisée avec beaucoup de sérieux.\n\nUn grand merci pour votre professionnalisme, votre réactivité et votre disponibilité. Une personne à l’écoute, rassurante, qui prend le temps d’expliquer les choses et qui fait preuve d’une grande bienveillance.\n\nJe recommande les yeux fermés, sans la moindre hésitation.\n\nUn professionnel au top, comme on aimerait en rencontrer plus souvent ! 👏😊" },
  bromann: { author: "Marie Bromann", about: "nuisibles", text: "Professionnel sympa sérieux efficace …je recommande" },
  muller: { author: "clara muller", about: "nuisibles", text: "Très minutieux et rapide, je recommande les yeux fermés ! Merci beaucoup !! ☺️" },
  coustillet: { author: "eric coustillet", about: "nuisibles", text: "Personne disponible et très professionnel. Les tarifs sont corrects." },
  fontanive: { author: "Nadine Fontanive", about: "nuisibles", text: "Très bonne expérience, personne sérieuse et consciencieuse qui viens à votre secours à toutes heures. Je recommande hautement" },
  duverne: { author: "Rachel Duverne", about: "puces", text: "Un grand merci à ce professionnel qui nous a efficacement debarassé d'une invasion de puces des champs, avant qu'elles ne puissent envahir notre maison. Nous referons appel à ces services si le besoin se représente !" },
  genest: { author: "Julien GENEST", about: "frelons asiatiques", text: "Intervention réalisée pour un nid de frelons asiatiques. Entreprise locale très réactive et sérieuse. Des solutions efficaces ont été mises en place malgré la contrainte de grande hauteur. Merci au gérant pour sa sympathie et son grand professionnalisme !" },
  buke: { author: "Gulay Buke", about: "frelons", text: "Parfait ! Intervention sur un nid de frelons réussie. Entreprise plus que réactive et efficace je recommande ." },
  babinski: { author: "Sebastien Babinski", about: "guêpes", text: "Contact agréable. Intervention rapide et efficace sur un nid de guêpes. Je recommande ce professionnel." },
  hanuszek: { author: "Ema Hanuszek", about: "frelons", text: "[…] Devis clair et respecté. C'est un excellent désinsectiseur local. Un grand merci pour votre réactivité !" },
  moock: { author: "Valerie Moock", about: "guêpes", text: "[…] Contact super et agréable. Je recommande ce professionnel." },
} satisfies Record<string, ClientReview>;

export type ClientReviewKey = keyof typeof CLIENT_REVIEWS;
