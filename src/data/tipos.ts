export interface Regiao {
  id: string;
  nome: string;
  vocacao: string;
  cor: string;
  textoClaro: boolean;
  texto: string;
  imagem: string | null; // caminho em /public quando houver fotos da pesquisa
}

export interface Membro {
  nome: string;
  papel: string;
  bio: string;
  links: { rotulo: string; url: string }[];
  foto: string | null; // caminho em /public quando houver retratos
}

export interface Episodio {
  titulo: string;
  regiao: string;
  spotifyEmbedUrl: string; // ex.: https://open.spotify.com/embed/episode/ID
}
