import acibademKent from "../assets/partners/acibadem-kent.png";
import batiPaslanmaz from "../assets/partners/bati-paslanmaz.png";
import batiPolimer from "../assets/partners/bati-polimer.png";
import blueGreenChemistry from "../assets/partners/blue-green-chemistry.png";
import borusanLojistik from "../assets/partners/borusan-lojistik.png";
import ersencer from "../assets/partners/ersencer.png";
import intasCelikBoru from "../assets/partners/intas-celik-boru.png";
import kartemMakina from "../assets/partners/kartem-makina.png";
import kutlusan from "../assets/partners/kutlusan.png";
import lufian from "../assets/partners/lufian.png";
import lydia from "../assets/partners/lydia.png";
import oralAmbalaj from "../assets/partners/oral-ambalaj.png";
import ozmarLojistik from "../assets/partners/ozmar-lojistik.png";
import uzKimya from "../assets/partners/uz-kimya.png";

export const partners = [
  {
    id: 1,

    name:
      "Acıbadem İzmir Kent Hastanesi",

    logo:
      acibademKent,

    website:
      "https://www.acibadem.com.tr/hastane/izmir-kent-hastanesi/",
  },

  {
    id: 2,

    name:
      "Batı Paslanmaz",

    logo:
      batiPaslanmaz,

    website:
      "https://www.batipaslanmaz.com.tr/",
  },

  {
    id: 3,

    name:
      "Batı Polimer",

    logo:
      batiPolimer,

    website:
      "https://www.batipolimer.com/",
  },

  {
    id: 4,

    name:
      "Blue Green Chemistry",

    logo:
      blueGreenChemistry,

    website:
      "https://www.bgchem.com.tr/",
  },

  {
    id: 5,

    name:
      "Borusan Lojistik",

    logo:
      borusanLojistik,

    website:
      "https://borusanlojistik.com/",
  },

  {
    id: 6,

    name:
      "Ersencer Mühendislik",

    logo:
      ersencer,

    website:
      "https://www.ersencer.com/",
  },

  {
    id: 7,

    name:
      "İntaş Çelik Boru",

    logo:
      intasCelikBoru,

    website:
      "https://intasboru.com.tr/",
  },

  {
    id: 8,

    name:
      "Kartem Makina",

    logo:
      kartemMakina,

    website:
      "https://www.kartemmakina.com.tr/",
  },

  {
    id: 9,

    name:
      "Kutlusan",

    logo:
      kutlusan,

    website:
      "https://www.kutlusan.com.tr/",
  },

  {
    id: 10,

    name:
      "Lufian",

    logo:
      lufian,

    website:
      "https://www.lufian.com/",
  },

  {
    id: 11,

    name:
      "Lydia Bedding",

    logo:
      lydia,

    website:
      "https://lydiabeds.com/tr/",
  },

  {
    id: 12,

    name:
      "Oral Ambalaj",

    logo:
      oralAmbalaj,

    website:
      "https://www.oralambalaj.com.tr/",
  },

  {
    id: 13,

    name:
      "Özmar Lojistik",

    logo:
      ozmarLojistik,

    website:
      "https://www.linkedin.com/company/%C3%B6zmar-lojistik/",
  },

  {
    id: 14,

    name:
      "Uz Kimya",

    logo:
      uzKimya,

    website:
      "https://uzkimya.com/",
  },
];

export function getPartnerById(
  id,
) {
  return partners.find(
    (partner) =>
      String(partner.id) ===
      String(id),
  );
}