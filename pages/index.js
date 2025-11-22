import Head from 'next/head';
import SectionTitle from '@/components/SectionTitle';
import ProfessionalCard from '@/components/ProfessionalCard';
import MaterialCategory from '@/components/MaterialCategory';
import AreaAllocation from '@/components/AreaAllocation';
import PlanningTimeline from '@/components/PlanningTimeline';
import BudgetTable from '@/components/BudgetTable';
import AdministrativeList from '@/components/AdministrativeList';
import { coreTeam, executionTeam, administrativeSteps } from '@/data/professionals';
import { materialCategories } from '@/data/materials';
import { areaProgram, planningPhases, budgetBreakdown } from '@/data/project-plan';

export default function Home() {
  return (
    <>
      <Head>
        <title>Programme T3/T2 & Local commercial - Guide projet</title>
        <meta
          name="description"
          content="Professionnels à mobiliser et matériaux nécessaires pour transformer un local de 200 m² en deux T3, trois T2 et un commerce."
        />
      </Head>
      <main>
        <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
          <h1>Transformation d'un local 200 m² en 2 T3, 3 T2 & commerce</h1>
          <p style={{ marginTop: '1.25rem', color: '#475569', lineHeight: 1.8 }}>
            Ce tableau de bord rassemble les professionnels clés, les matériaux prioritaires et les jalons de
            planification pour sécuriser votre projet de division immobilière et l'intégration d'un local commercial.
          </p>
          <div className="highlight" style={{ marginTop: '2rem', display: 'inline-block', textAlign: 'left' }}>
            <strong>Surface totale :</strong> {areaProgram.totalArea} m² • <strong>Typologies :</strong> 5 logements + 1 commerce •{' '}
            <strong>Objectif :</strong> livrer des logements performants, acoustiques et conformes aux normes ERP.
          </div>
        </section>

        <section>
          <SectionTitle
            title="Programmation spatiale"
            subtitle="Répartition indicative des surfaces et points d'attention par typologie"
          />
          <AreaAllocation allocation={areaProgram.allocation} ratios={areaProgram.ratios} />
        </section>

        <section>
          <SectionTitle
            title="Équipe de conception"
            subtitle="Acteurs à missionner en amont pour cadrer le projet, anticiper les contraintes et sécuriser l'autorisation d'urbanisme"
          />
          <div className="grid two">
            {coreTeam.map((pro) => (
              <ProfessionalCard key={pro.name} {...pro} />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle
            title="Corps d'état en phase travaux"
            subtitle="Spécialistes à engager via une entreprise générale ou en lots séparés selon votre stratégie de chantier"
          />
          <div className="grid two">
            {executionTeam.map((pro) => (
              <ProfessionalCard key={pro.name} {...pro} />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle
            title="Matériaux & fournitures prioritaires"
            subtitle="Liste par lot pour préparer l'appel d'offres et lancer les approvisionnements"
          />
          <div className="grid two">
            {materialCategories.map((category) => (
              <MaterialCategory key={category.category} {...category} />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle
            title="Budget indicatif par lot"
            subtitle="Répartition moyenne à ajuster avec l'économiste selon le niveau de finition visé"
          />
          <BudgetTable items={budgetBreakdown} />
        </section>

        <section>
          <SectionTitle
            title="Planning type"
            subtitle="Découpage temporel pour piloter les études, la consultation et les travaux"
          />
          <PlanningTimeline phases={planningPhases} />
        </section>

        <section>
          <SectionTitle
            title="Démarches administratives" 
            subtitle="Points réglementaires à traiter avant le chantier"
          />
          <AdministrativeList steps={administrativeSteps} />
        </section>

        <section>
          <SectionTitle
            title="Conseils clés"
            subtitle="Priorités pour sécuriser la rentabilité et le calendrier"
          />
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#1f2937', lineHeight: 1.7 }}>
            <li>
              • Mettre en place un <strong>diagnostic acoustique</strong> spécifique pour éviter les nuisances entre logements et le local commercial.
            </li>
            <li>• Prévoir un <strong>contrat de mission complet</strong> avec l'architecte incluant suivi de chantier (mission DET & AOR).</li>
            <li>
              • Anticiper les <strong>contraintes ERP</strong> (accessibilité, sécurité incendie) du commerce dès l'esquisse pour éviter les reprises coûteuses.
            </li>
            <li>• Sécuriser le <strong>financement</strong> et la trésorerie du chantier avec une marge d'imprévus d'au moins 10 %.</li>
            <li>
              • Demander à chaque entreprise ses <strong>attestations décennales</strong>, fiches techniques matériaux et notices de mise en œuvre.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
