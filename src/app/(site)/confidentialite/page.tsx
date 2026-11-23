import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/site/legal-page";
import { routes, siteConfig } from "@/lib/site-config";

const { name } = siteConfig;

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Quelles données nous traitons, pourquoi, avec qui nous les partageons et comment exercer vos droits.",
};

const sections: LegalSection[] = [
  {
    id: "qui-sommes-nous",
    navTitle: "Qui sommes-nous",
    body: (
      <>
        <p>
          {name} est édité par TOOTLE, SARL au capital de 1 000 000 FCFA,
          immatriculée au RCCM sous le n° TG-LFW-01-2024-B12-01229, dont le siège est situé Agoè, Sanguéra, Togo.
          Pour les données de nos utilisateurs commerçants, nous sommes responsable du traitement.
        </p>
        <p>Contact pour toute question sur vos données : <a href="mailto:contact@tootlecorp.com">contact@tootlecorp.com</a>.</p>
      </>
    ),
  },
  {
    id: "donnees-collectees",
    navTitle: "Données collectées",
    body: (
      <>
        <p>
          <strong>Commerçants et employés :</strong>
        </p>
        <ul>
          <li>numéro de téléphone, nom, rôle dans la boutique ;</li>
          <li>nom, catégorie, ville et quartier de la boutique, logo, horaires ;</li>
          <li>
            informations figurant sur les factures (NIF, RCCM si fournis) et moyens de paiement
            acceptés ;
          </li>
          <li>catalogue, stock, commandes, factures et paiements enregistrés.</li>
        </ul>
        <p>
          <strong>Clients des commerçants</strong>, reçus via WhatsApp : nom de profil, numéro de
          téléphone, contenu de la commande, adresse de livraison et mode de paiement.
        </p>
        <p>
          <strong>Livreurs :</strong> nom, numéro de téléphone, zone, statut des courses et
          encaissements signalés.
        </p>
        <p>
          <strong>Données techniques :</strong> journaux de connexion, type d&apos;appareil et de
          navigateur, nécessaires au fonctionnement et à la sécurité du service.
        </p>
      </>
    ),
  },
  {
    id: "finalites",
    navTitle: "Pourquoi nous les utilisons",
    body: (
      <>
        <ul>
          <li>
            fournir le service : synchroniser le catalogue, recevoir et traiter les commandes,
            générer et envoyer les factures, organiser les livraisons ;
          </li>
          <li>sécuriser votre compte, notamment par la vérification par code (OTP) ;</li>
          <li>vous assister lorsque vous contactez le support ;</li>
          <li>respecter nos obligations légales, notamment comptables ;</li>
          <li>améliorer l&apos;application à partir de statistiques d&apos;usage agrégées.</li>
        </ul>
        <p>
          Nous ne vendons pas vos données et nous ne les utilisons pas pour de la publicité ciblée.
        </p>
      </>
    ),
  },
  {
    id: "donnees-clients",
    navTitle: "Les données de vos clients",
    body: (
      <p>
        Pour les données de ses propres clients, le commerçant est responsable du traitement. {name}{" "}
        les traite uniquement pour son compte et selon ses instructions, afin de gérer ses commandes,
        factures et livraisons. Le commerçant s&apos;engage à informer ses clients de ce traitement.
      </p>
    ),
  },
  {
    id: "partage",
    navTitle: "Partage des données",
    body: (
      <>
        <p>Nous partageons uniquement ce qui est nécessaire, avec :</p>
        <ul>
          <li>
            Meta, via l&apos;API WhatsApp Cloud, pour envoyer et recevoir les messages et
            synchroniser le catalogue ;
          </li>
          <li>le livreur assigné à une commande : nom, numéro et adresse du client concerné ;</li>
          <li>
            nos prestataires techniques : hébergement (Contabo), envoi des SMS de
            vérification (AfrikSMS), analyse des statistiques d&apos;usage (Google Analytics) ;
          </li>
          <li>les autorités, lorsque la loi nous y oblige.</li>
        </ul>
      </>
    ),
  },
  {
    id: "transferts",
    navTitle: "Transferts hors du Togo",
    body: (
      <p>
        Certains prestataires, dont Meta et notre hébergeur, peuvent traiter des données hors du
        Togo. Ces transferts sont encadrés conformément à la loi n° 2019-014 et, lorsque celle-ci
        l&apos;exige, soumis aux formalités prévues auprès de l&apos;Instance de protection des
        données à caractère personnel (IPDCP).
      </p>
    ),
  },
  {
    id: "conservation",
    navTitle: "Durée de conservation",
    body: (
      <div>
        <p>
          Les données à caractère personnel sont conservées conformément à la
          réglementation togolaise applicable, notamment la loi n° 2019-014
          du 29 octobre 2019 relative à la protection des données à caractère personnel.
        </p>

        <p>Les durées de conservation sont définies comme suit :</p>

        <ul>
          <li>
            <strong>Données du compte utilisateur :</strong>
            pendant toute la durée d&apos;activité du compte, puis pendant une période
            maximale de trois (3) ans après sa fermeture, sous réserve des
            obligations légales ou de la nécessité de conserver certaines données
            pour la constatation, l&apos;exercice ou la défense de droits en justice ;
          </li>
          <li>
            <strong>Factures et données comptables :</strong>
            dix (10) ans, conformément aux obligations légales applicables ;
          </li>
          <li>
            <strong>Journaux techniques et de connexion :</strong>
            douze (12) mois à compter de leur génération ;
          </li>
          <li>
            <strong>Sauvegardes techniques :</strong>
            dans la limite de quatre-vingt-dix (90) jours, selon les cycles de
            sauvegarde et de renouvellement du système.
          </li>
        </ul>

        <p>
          À l&apos;expiration des durées applicables, les données concernées sont
          supprimées ou anonymisées, sauf obligation légale de conservation ou
          nécessité légitime de leur archivage.
        </p>

        <p>
          Lorsque certaines données doivent être conservées au-delà de leur durée
          d&apos;utilisation courante pour satisfaire à une obligation légale ou préserver
          des droits en justice, elles font l&apos;objet d&apos;un archivage avec un accès
          limité aux seules personnes habilitées.
        </p>
      </div>
    ),
  },
  {
    id: "securite",
    navTitle: "Sécurité",
    body: (
      <p>
        Les échanges sont chiffrés, l&apos;accès aux données est limité selon les rôles
        (propriétaire, employé, livreur) et chaque connexion est protégée par un code de
        vérification. Aucun système n&apos;étant infaillible, nous vous informerons de toute
        violation susceptible de vous affecter.
      </p>
    ),
  },
  {
    id: "vos-droits",
    navTitle: "Vos droits",
    body: (
      <>
        <p>
          Vous pouvez demander l&apos;accès à vos données, leur rectification, leur suppression ou
          vous opposer à certains traitements, en écrivant à [adresse e-mail dédiée]. Nous répondons
          dans un délai de [délai].
        </p>
        <p>
          Vous pouvez aussi adresser une réclamation à l&apos;IPDCP :{" "}
          <a href="https://ipdcp.tg">ipdcp.tg</a>.
        </p>
      </>
    ),
  },
  {
    id: "modifications",
    navTitle: "Modifications",
    body: (
      <p>
        Nous pouvons modifier cette politique. En cas de changement important, nous vous prévenons
        dans l&apos;application avant son entrée en vigueur.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      summary="Quelles données nous traitons, pourquoi, avec qui nous les partageons et comment exercer vos droits."
      intro={`${name} est une application de gestion pour les commerçants qui vendent sur WhatsApp Business. Cette politique explique comment nous traitons les données personnelles, conformément à la loi n° 2019-014 du 29 octobre 2019 relative à la protection des données à caractère personnel au Togo.`}
      accent="lime"
      sections={sections}
      closing={{
        text: "Une question sur vos données ?",
        href: routes.contact,
        label: "Nous contacter",
        tone: "ink",
      }}
      current={routes.privacy}
    />
  );
}
