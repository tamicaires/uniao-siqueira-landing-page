"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MessageCircle, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const products = [
  {
    id: 1,
    name: "Porcelanato Onice Bianco Polido",
    category: "Porcelanato",
    images: [
      "https://www.deltaceramica.com.br/files/product/img_1645013342i.jpg",
      "https://www.deltaceramica.com.br/files/simulator/img_1657714787i.jpg",
    ],
    description:
      "A sofisticação e elegância inspirada na beleza dos marmorizados traduzem nossa inspiração para seu ambiente. O porcelanato Onice Bianco Polido é a escolha perfeita para quem busca um ambiente luxuoso e atemporal.",
    size: "63x120cm",
    quantityPerM2: 2.25,
    features: [
      "Resistente a manchas",
      "Fácil limpeza",
      "Acabamento polido de alto brilho",
    ],
  },
  {
    id: 2,
    name: "Porcelanato Santorine Acetinado",
    category: "Porcelanato",
    images: [
      "https://www.deltaceramica.com.br/files/product/img_1653995169i.jpg",
      "https://cdn.awsli.com.br/800x800/2575/2575978/produto/2298939501d2cefdbda.jpg",
    ],
    description:
      "A sofisticação e elegância inspirada na beleza dos marmorizados traduzem nossa inspiração para seu ambiente. O porcelanato Santorine Acetinado é a escolha perfeita para quem busca um ambiente luxuoso e atemporal.",
    size: "63x120cm",
    quantityPerM2: 2.25,
    features: ["Resistente a manchas", "Fácil limpeza", "Acabamento acetinado"],
  },
  {
    id: 3,
    name: "Porcelanato Toronto Cement Out",
    category: "Porcelanato",
    images: [
      "https://www.deltaceramica.com.br/files/product/img_1597836113i.jpg",
      "https://www.deltaceramica.com.br/files/simulator/img_1654707758i.jpg",
    ],
    description:
      "Acabamento rustico e textura marcante, o porcelanato Toronto Cement Out é a escolha perfeita para quem busca um ambiente moderno e despojado. Ideal para áreas externas e internas.",
    size: "63x120cm",
    quantityPerM2: 2.25,
    features: ["Alta durabilidade", "Fácil limpeza", "Acabamento rústico"],
  },
  {
    id: 4,
    name: "Porcelanato Cotton Polido",
    category: "Piso",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXeGPxYiNjffT0h85Aeyn-pE9F78ziziS98g&s",
      "https://www.tumkus.com.br/1129918-thickbox_default/porcelanato-84x84-cotton-polido-extra-delta.jpg",
    ],
    description:
      "O porcelanato Cotton Polido é a escolha perfeita para quem busca um ambiente moderno e sofisticado. Ideal para ambientes residenciais, proporciona um visual clean e elegante.",
    size: "63x120cm",
    quantityPerM2: 2.88,
    features: [
      "Resistente a riscos e manchas",
      "Fácil instalação e manutenção",
      "Polido de alto brilho",
      "Ideal para ambientes residenciais",
    ],
  },
  {
    id: 5,
    name: "Porcelanato Fugi Sans Polido",
    category: "Porcelanato",
    images: [
      "https://www.deltaceramica.com.br/files/product/img_1654258499i.jpg",
      "https://pedraopvc.vteximg.com.br/arquivos/ids/174600-800-800/44241.jpg?v=637493339379370000",
    ],
    description:
      "Porcelanato com efeito de mármore, traz sofisticação a qualquer ambiente. Reproduz com perfeição as nuances e veios do mármore natural em tons de bege, proporcionando um visual luxuoso e atemporal.",
    size: "63x120cm",
    quantityPerM2: 2.88,
    features: [
      "Aparência de mármore natural",
      "Alta resistência",
      "Fácil limpeza",
      "Ideal para áreas nobres",
    ],
  },
  {
    id: 6,
    name: "Porcelanato Nevada Polido",
    category: "Porcelanato",
    images: [
      "https://www.deltaceramica.com.br/files/product/img_1722939825i.jpg",
      "https://liquidapiso.com.br/wp-content/uploads/2022/05/COZINHA-NE.jpg",
    ],
    description:
      "Porcelanato com efeito de mármore, traz sofisticação a qualquer ambiente. Reproduz com perfeição as nuances e veios do mármore natural em tons de bege, proporcionando um visual luxuoso e atemporal.",
    size: "63x120cm",
    quantityPerM2: 2.88,
    features: [
      "Aparência de mármore natural",
      "Alta resistência",
      "Fácil limpeza",
      "Ideal para áreas nobres",
    ],
  },
  {
    id: 7,
    name: "Porcelanato Vene Doro Nero Polido",
    category: "Porcelanato",
    images: [
      "https://www.deltaceramica.com.br/files/product/img_1680001462i.jpg",
      "https://padovani.vtexassets.com/arquivos/ids/191544/Porcelanato-Vene-Doro-Nero-Polido-Retificado-63x120cm---Delta-amb.jpg?v=638229477416870000",
    ],
    description:
      "A beleza do porcelanato polido preto com veios dourados. O porcelanato Vene Doro Polido é a escolha perfeita para quem busca um ambiente luxuoso e atemporal.",
    size: "60x120cm",
    quantityPerM2: 2.88,
    features: [
      "Resistente a manchas",
      "Fácil limpeza",
      "Acabamento polido de alto brilho",
    ],
  },
  {
    id: 8,
    name: "Porcelanato Vene Doro Polido",
    category: "Porcelanato",
    images: [
      "https://images.cws.digital/produtos/gg/75/55/porcelanato-delta-vene-doro-63x120-polido-caixa-com-225-m-10075575-1671645094172.jpg",
      "https://www.deltaceramica.com.br/files/simulator/img_1653069746i.jpg",
    ],
    description:
      "A beleza do porcelanato polido com veios dourados. O porcelanato Vene Doro Polido é a escolha perfeita para quem busca um ambiente luxuoso e atemporal.",
    size: "60x120cm",
    quantityPerM2: 2.88,
    features: [
      "Resistente a manchas",
      "Fácil limpeza",
      "Acabamento polido de alto brilho",
    ],
  },
  {
    id: 9,
    name: "Porcelanato Calacata Polido",
    category: "Porcelanato",
    images: [
      "https://www.deltaceramica.com.br/files/product/img_1600259066i.jpg",
      "https://cdn.avanteplus.com.br/stores/romani/gallery/269732-porcelanat3984-15942453.jpg",
    ],
    description:
      "Porcelana com efeito de mármore, traz sofisticação a qualquer ambiente. Reproduz com perfeição as nuances e veios do mármore natural em tons de bege, proporcionando um visual luxuoso e atemporal.",
    size: "63x120cm",
    quantityPerM2: 2.25,
    features: [
      "Resistente a manchas",
      "Fácil limpeza",
      "Acabamento polido de alto brilho",
    ],
  },
  {
    id: 10,
    name: "Porcelanato Barcelona Arena",
    category: "Porcelanato",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUC6w1drxiXHpGCL1VCid82ylNHOvArV3YQ&s",
      "https://chatuba.vtexassets.com/arquivos/ids/175652/Porcelanato-Barcelona-Arena-Delta-Acetinado-84x84cm1.png?v=637811371058500000",
    ],
    description:
      "Porcelanato acetinado em tom neutro, ideal para ambientes modernos e sofisticados. O porcelanato Barcelona Arena é a escolha perfeita para quem busca um ambiente clean e elegante.",
    size: "84x84cm",
    quantityPerM2: 2.8,
    features: ["Resistente a manchas", "Fácil limpeza", "Acabamento acetinado"],
  },
  {
    id: 11,
    name: "Porcelanato Barcelona Plata",
    category: "Porcelanato",
    images: [
      "https://abcdaconstrucao.fbitsstatic.net/img/p/porcelanato-delta-barcelona-plata-polido-cinza-84x84cm-retificado-89135/275642.jpg?w=530&h=530&v=no-value",
      "https://chatuba.vtexassets.com/arquivos/ids/174074/Porcelanato-Delta-Barcelona-Plata-Acetinado-84x84cm1.png?v=637711140235100000",
    ],
    description:
      "Porcelanato acetinado em tom neutro, ideal para ambientes modernos e sofisticados. O porcelanato Barcelona Arena é a escolha perfeita para quem busca um ambiente clean e elegante.",
    size: "84x84cm",
    quantityPerM2: 2.8,
    features: ["Resistente a manchas", "Fácil limpeza", "Acabamento acetinado"],
  },
  {
    id: 12,
    name: "Porcelanato Barcelona Bloc",
    category: "Porcelanato",
    images: [
      "https://tezbgl.vteximg.com.br/arquivos/ids/173604-1000-1000/porcelanato-polido-barcelona-bloc-84x84-a-delta-cx-280-m-105495-valor-exibido-por-m.jpg?v=638073113969330000",
      "https://images.tcdn.com.br/img/img_prod/1209418/porcelanato_delta_84x84_acetinado_barcelona_bloc_in_cx_2_8m_4013_2_0a1a117717da879384abdb5ad4e482d6.jpg",
    ],
    description:
      "Porcelanato acetinado em tom neutro, ideal para ambientes modernos e sofisticados. O porcelanato Barcelona Arena é a escolha perfeita para quem busca um ambiente clean e elegante.",
    size: "84x84cm",
    quantityPerM2: 2.8,
    features: ["Resistente a manchas", "Fácil limpeza", "Acabamento acetinado"],
  },
  {
    id: 12,
    name: "Porcelanato Calacata Ice Polido",
    category: "Porcelanato",
    images: [
      "https://d31dtgi5yshghi.cloudfront.net/Custom/Content/Products/96/77/9677_porc-delta-polido-84x84-calacata-ice-mt-4007_z1_637746589808567092.webp",
      "https://images.tcdn.com.br/img/img_prod/1359624/piso_porcelanato_calacata_ice_84x84_polido_rt_delta_5123_1_711d714ab6e163c38318c368036cb07b.jpeg",
    ],
    description:
      "Porcelanato polido com efeito de mármore, traz sofisticação a qualquer ambiente. Reproduz com perfeição as nuances e veios do mármore natural em tons de bege, proporcionando um visual luxuoso e atemporal.",
    size: "84x84cm",
    quantityPerM2: 2.8,
    features: [
      "Resistente a manchas",
      "Fácil limpeza",
      "Acabamento polido de alto brilho",
    ],
  },
  {
    id: 13,
    name: "Porcelanato Cotton Polido",
    category: "Porcelanato",
    images: [
      "https://www.deltaceramica.com.br/files/product/img_1597949162i.jpg",
      "https://chatuba.vtexassets.com/arquivos/ids/175641/Porcelanato-Cotton-Delta-Polido-84x84cm1.png?v=637810692579500000",
    ],
    description:
      "Porcelanato polido branco, ideal para ambientes modernos e sofisticados. O porcelanato Cotton Polido é a escolha perfeita para quem busca um ambiente clean e elegante.",
    size: "84x84cm",
    quantityPerM2: 2.8,
    features: [
      "Resistente a manchas",
      "Fácil limpeza",
      "Acabamento polido de alto brilho",
    ],
  },
  {
    id: 14,
    name: "Porcelanato Fuji Sand Polido",
    category: "Porcelanato",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Ra2FItF7EKFlWBtVThfmXFrjavNgM3LdSA&s",
      "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/ouromilp/catalog/delta/63x63/fuji-sand-63x63-polido-amb.jpg",
    ],
    description:
      "Porcelanato tons de bege com efeito de mármore, traz sofisticação a qualquer ambiente. Reproduz com perfeição as nuances e veios do mármore natural em tons de bege, proporcionando um visual luxuoso e atemporal.",
    size: "84x84cm",
    quantityPerM2: 2.8,
    features: [
      "Resistente a manchas",
      "Fácil limpeza",
      "Acabamento polido de alto brilho",
    ],
  },
  {
    id: 15,
    name: "Porcelanato Madri Plata Acetinado",
    category: "Porcelanato",
    images: [
      "https://abcdaconstrucao.fbitsstatic.net/img/p/porcelanato-delta-madrid-plata-acetinado-cinza-84x84cm-retificado-93776/280283.jpg?w=530&h=530&v=no-value",
      "https://telhanorte.vtexassets.com/arquivos/ids/1248489/2452715-2.jpg?v=638755825707500000",
    ],
    description:
      "Porcelanato acetinado em tom neutro, ideal para ambientes modernos e sofisticados. O porcelanato Madri Plata é a escolha perfeita para quem busca um ambiente clean e elegante.",
    size: "84x84cm",
    quantityPerM2: 2.8,
    features: ["Resistente a manchas", "Fácil limpeza", "Acabamento acetinado"],
  },
  {
    id: 16,
    name: "Porcelanato Pulpis Cinza Acetinado",
    category: "Porcelanato",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGrJ2JMc3BVu5w6kgZt0AS5lTNjOd3K4Uy8Q&s",
      "https://liquidapiso.com.br/wp-content/uploads/2022/08/PULPIS-CINZA-IN.jpg",
    ],
    description:
      "Porcelanato acetinado em tom neutro, ideal para ambientes modernos e sofisticados. O porcelanato Pulpis Cinza é a escolha perfeita para quem busca um ambiente clean e elegante.",
    size: "84x84cm",
    quantityPerM2: 2.8,
    features: ["Resistente a manchas", "Fácil limpeza", "Acabamento acetinado"],
  },
  {
    id: 17,
    name: "Porcelanato Pulpis Grafite Polido",
    category: "Porcelanato",
    images: [
      "https://img.irroba.com.br/filters:fill(fff):quality(80)/ouromilp/catalog/delta/84x84/pulpis-grafite-84-polido.jpg",
      "https://images.tcdn.com.br/img/img_prod/1260165/porcelanato_pulpis_grafite_84x84_polido_retificado_delta_11_1_3d610252cf1336779d7d917e33f59b8e.jpg",
    ],
    description:
      "Porcelanato polido em tom grafite, ideal para ambientes modernos e sofisticados. O porcelanato Pulpis Grafite é a escolha perfeita para quem busca um ambiente clean e elegante.",
    size: "84x84cm",
    quantityPerM2: 2.8,
    features: [
      "Resistente a manchas",
      "Fácil limpeza",
      "Acabamento polido de alto brilho",
    ],
  },
  {
    id: 18,
    name: "Piso Varandas Grigio",
    category: "Piso",
    images: [
      "https://lumeceramica.com.br/wp-content/uploads/2024/03/VARANDAS-GRIGIO-novo.jpg",
    ],
    description:
      "Piso elegante, com tons de cinza e detalhes que elevam o nivel do seu lar.",
    size: "60x60cm",
    quantityPerM2: 2.5,
    features: ["Resistente a manchas", "Fácil limpeza", "Acabamento acetinado"],
  },
  {
    id: 19,
    name: "Piso Studio Gris",
    category: "Piso",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNhB5Zbuq19s1wDEgbM2P0ZTnCoxBwcNUOw&s",
      "https://cassol.vtexassets.com/arquivos/ids/4669874-800-auto?v=638739270763630000&width=800&height=auto&aspect=true",
    ],
    size: "60x60cm",
    quantityPerM2: 2.5,
    features: ["Resistente a manchas", "Fácil limpeza", "Acabamento acetinado"],
  },
  {
    id: 20,
    name: "Piso Titanium Branco",
    category: "Piso",
    images: [
      "https://lumeceramica.com.br/wp-content/uploads/2021/08/TITANIUM-BRANCO.jpg",
      "https://images.tcdn.com.br/img/img_prod/1290726/piso_60x60_titanium_branco_retificado_extra_pei5_v2_1_face_cx_2_5m_lume_1313_2_4e97da992153ac6e423cf35e0393cfa4.jpg",
    ],
    size: "60x60cm",
    quantityPerM2: 2.5,
    features: ["Resistente a manchas", "Fácil limpeza", "Acabamento brilhante"],
  },
  {
    id: 21,
    name: "Piso Piedra Plus",
    category: "Piso",
    images: [
      "https://lumeceramica.com.br/wp-content/uploads/2021/08/Piedra-60x60-1.jpg",
      "https://lumeceramica.com.br/wp-content/uploads/2021/08/Piedra.jpg",
    ],
    size: "60x60cm",
    quantityPerM2: 2.5,
    features: ["Resistente a manchas", "Fácil limpeza", "Acabamento brilhante"],
  },
  {
    id: 22,
    name: "Piso Marmo Bianco",
    category: "Piso",
    images: [
      "https://lumeceramica.com.br/wp-content/uploads/2022/11/MARMO_BIANCO_FC1.jpg",
      "https://lumeceramica.com.br/wp-content/uploads/2023/06/Marmo-Bianco-ambiente.jpg",
    ],
    size: "60x60cm",
    quantityPerM2: 2.5,
    features: ["Resistente a manchas", "Fácil limpeza", "Acabamento brilhante"],
  },
  {
    id: 23,
    name: "Piso Maldivas Contact",
    category: "Piso",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqK7V2JfkYPhwITo2wRYLIPcYdPCRBCNutBw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSduyJPMbRRhfZ9zLnRAOAaFjy_aQxPA61TtFa2CAMSx3e8r45UxlwWlZHrVemRLzXoikY&usqp=CAU",
    ],
    size: "60x60cm",
    quantityPerM2: 2.5,
    features: ["Resistente a manchas", "Fácil limpeza", "Acabamento acetinado"],
  },
  {
    id: 23,
    name: "Piso Maldivas Contact",
    category: "Piso",
    images: [
      "https://lumeceramica.com.br/wp-content/uploads/2022/11/CRISTALLO-FC1.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzhotdVRishsOPqw2NN2gBhl6eXqcsPVRcQ&s",
    ],
    size: "60x60cm",
    quantityPerM2: 2.5,
    features: ["Resistente a manchas", "Fácil limpeza", "Acabamento brilhante"],
  },
  {
    id: 24,
    name: "Piso Cristalo",
    category: "Piso",
    images: [
      "https://lumeceramica.com.br/wp-content/uploads/2022/11/CRISTALLO-FC1.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzhotdVRishsOPqw2NN2gBhl6eXqcsPVRcQ&s",
    ],
    size: "60x60cm",
    quantityPerM2: 2.5,
    features: ["Resistente a manchas", "Fácil limpeza", "Acabamento brilhante"],
  },
  {
    id: 25,
    name: "Piso Dallas",
    category: "Piso",
    images: [
      "https://lumeceramica.com.br/wp-content/uploads/2021/08/Dallas-60x60-1.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LGOK8eEkShymM_5mLeeijdiLu2n5iQNPaA&s",
    ],
    size: "60x60cm",
    quantityPerM2: 2.5,
    features: [
      "Resistente a manchas",
      "Fácil limpeza",
      "Acabamento granilado/liso",
    ],
  },
  {
    id: 25,
    name: "Piso Calacata Bianco",
    category: "Piso",
    images: [
      "https://liquidapiso.com.br/wp-content/uploads/2024/03/CALACATA-BIANCO-LUME.jpg",
      "https://lumeceramica.com.br/wp-content/uploads/2023/10/CALACATA-BIANCO-ambiente-60x60-1.jpg",
    ],
    size: "60x60cm",
    quantityPerM2: 2.5,
    features: ["Resistente a manchas", "Fácil limpeza", "Acabamento brilhante"],
  },
  {
    id: 26,
    name: "Piso Arizona Cinza",
    category: "Piso",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MnQV7xzRJhnYLby6YQKB21YTt0_ROlpeSg&s",
      "https://tosel.vtexassets.com/arquivos/ids/407177/31795-2.jpg?v=638649362215800000",
    ],
    size: "60x60cm",
    quantityPerM2: 2.5,
    features: [
      "Resistente a manchas",
      "Fácil limpeza",
      "Acabamento granilado/relevo",
    ],
  },
  {
    id: 26,
    name: "Piso Arizona Bege",
    category: "Piso",
    images: [
      "https://lumeceramica.com.br/wp-content/uploads/2021/08/Arizona-Bege-60x60cm.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYBZW__VPkLT747-pI6L9sGAy0dXHlRkS-g&s",
    ],
    size: "60x60cm",
    quantityPerM2: 2.5,
    features: ["Resistente a manchas", "Fácil limpeza", "Acabamento brilhante"],
  },
  {
    id: 27,
    name: "Piso Ambar",
    category: "Piso",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcn8Yngg2aWIgA-jqmkcLfcF571E7Mm8gbng&s",
      "https://acdn-us.mitiendanube.com/stores/001/111/164/products/imagem-1505-75e0e6018122cd0bfa17302019824273-1024-1024.jpg",
    ],
    size: "60x60cm",
    quantityPerM2: 2.5,
    features: ["Resistente a manchas", "Fácil limpeza", "Acabamento polido"],
  },
];

interface ProductModalProps {
  product: (typeof products)[0];
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % product.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-[#0648a8]">
          {product.name}
        </h2>
        <div className="relative h-64 md:h-96 mb-4">
          <Image
            src={product.images[currentImageIndex] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
          >
            &#10094;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
          >
            &#10095;
          </button>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="font-semibold">Tamanho:</p>
            <p>{product.size}</p>
          </div>
          <div>
            <p className="font-semibold">m² por Caixa:</p>
            <p>{product.quantityPerM2} peças</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-semibold mb-2">Características:</p>
          <ul className="list-disc list-inside">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <Link
          href={`https://wa.me/5599981348896?text=Olá, gostaria de saber mais sobre o produto: ${product.name}`}
        >
          <Button className="w-full bg-[#ffcf04] text-[#0648a8] hover:bg-[#ffcf04]/90">
            <MessageCircle className="mr-2 h-4 w-4" /> Falar com Especialista
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default function CatalogoPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "all" ||
        selectedCategory === "" ||
        product.category === selectedCategory)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-10">
      {/* Hero Section */}
      <div className="bg-[#0648a8] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Catálogo de Produtos
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto text-gray-100">
            Explore nossa seleção de pisos, porcelanatos, telhas e revestimentos
            de alta qualidade
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as categorias</SelectItem>
              <SelectItem value="Porcelanato">Porcelanato</SelectItem>
              <SelectItem value="Revestimento">Revestimento</SelectItem>
              <SelectItem value="Telha">Telha</SelectItem>
              <SelectItem value="Piso">Piso</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-64">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-[#0648a8]">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description && product.description}
                </p>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Tamanho:</span> {product.size}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Quantidade por m²:</span>{" "}
                    {product.quantityPerM2} peças
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">
                    {product.category}
                  </span>
                  <Button className="bg-[#ffcf04] text-[#0648a8] hover:bg-[#ffcf04]/90">
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
