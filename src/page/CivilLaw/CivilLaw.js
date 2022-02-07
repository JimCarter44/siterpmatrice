import './CivilLaw.css';
import UnitedStateOfSanAdreas from '../../img/sansandreas.png';
import Gouvernment from "../../component/Gouvernment/Gouvernment";

function CivilLaw() {
    return(
        <div>
            <Gouvernment />
            <div className="backgroundCivilLaw">
                <div className="civilLaw">
                    <h1>CODE CIVIL<br/>DE L'ETAT DE SAN ANDREAS</h1>
                    <h2>Chapitre I - Généralités</h2>
                    <h3>Article 1 - Dommage civil</h3>
                    <p>1. Tout fait de l'homme causant un dommage à un autre oblige au responsable dudit fait de
                        rembourser la personne lésée.<br/>
                        2. Tout dommage est de la responsabilité de celui qui en est à l'origine.
                        Ainsi il n'y a en cas fortuit ou d'événement face auquel il ne peut être fait face, pas de
                        responsabilité tant que tous les moyens possibles sont mis en œuvre pour pallier aux
                        dommages causés par cette situation. De même si l'action entraînant le dommage est
                        légitime et que les dommages en sont une conséquence strictement non souhaitée, il n'y a
                        pas de responsabilité. Plus largement, la responsabilité ou l'irresponsabilité est établie par le
                        Juge.
                    </p>
                    <h3>Article 2 - Principes de la Loi Civile</h3>
                    <p>1. Toute personne (physique ou morale) est responsable civilement de l'intégralité de ses
                        actes (volontaires ou non), et peut en assigner une autre.<br/>
                        2. Non rétroactive, la loi civile traite des litiges entre personnes (physiques ou morales).<br/>
                        3. Les procédures civiles non couplées à une procédure pénale relèvent de ce Code.
                        Les procédures civiles couplées à des procédures pénales sont soumises prioritairement
                        aux lois Pénales, et ensuite aux lois civiles.
                    </p>
                    <h3>Article 3 - Partie civile</h3>
                    <p>1. Seule la partie civile peut réclamer un dédommagement à la suite d'un préjudice.<br/>
                        2. Peuvent se porter partie civile: les victimes d'un préjudice, personnes représentant une
                        victime (physique ou morale) de préjudice.<br/>
                        3. Lorsque la Municipalité, une Police, l'état, la nation, ou une institution, peut avoir un intérêt
                        à se porter partie civile ou à porter à la connaissance de la Cour, quelque réquisition ou
                        information que ce soit, le "Commissaire du Gouvernement" dispose du droit de s'immiscer
                        dans un dossier civil (soit en tant que simple intervenant, soit en consultant, soit en partie
                        civile) pour faire porter sa voix, au nom de ces personnes morales.<br/>
                        4. Par défaut, le commissaire du Gouvernement est le procureur, la Mairie peut cependant
                        en désigner un autre.
                    </p>
                    <h2>Chapitre II - Application de la Loi Civile</h2>
                    <h3>Article 1 - Chambre civil</h3>
                    <p>1. Le Président de la Cour de Justice désigne les juges habiletés à traiter les Procédures
                        Civiles.
                        Si une Procédure Civile est couplée à une Procédure Pénale, elle peut être jugée par un
                        Juge aux affaires Pénales.<br/>
                        2. Les principes de recherche de la vérité, de serment, d'intérêt de la Société, de la Loi, de la
                        Vérité, et de la Justice sont les mêmes qu'en matière pénale.
                    </p>
                    <h3>Article 2 - Soumission d'un litige</h3>
                    <p>1. Une Affaire Civile non couplée à une affaire pénale est appelée un "Litige".<br/>
                        2. Un Litige est pris en charge (ouverture d'une Instruction Civile) par la Cour dès la
                        réception d'un “Courrier du Demandeur” (équivalent du "plaignant" au pénal), mentionnant
                        son désir de faire juger un litige, il mentionne dans ce courrier son identité complète, celle de
                        son opposant, la date et le lieu du litige en question, sa nature, son contexte, et ses attentes.<br/>
                        3. La Lettre peut également émaner de l'avocat du Demandeur.
                    </p>
                    <h3>Article 3 - Instruction civile et audience</h3>
                    <p>1. Le recours aux forces de police est interdit dans le cadre d'une Instruction Civile. Il en va
                        de même pour toutes les mesures coercitives.<br/>
                        2. Le Juge en charge de l'Instruction doit immédiatement prévenir la personne attaquée (ou
                        "assignée"). Il préparera à sa guise ensuite l'audience par la procédure qu'il juge utile
                        d'appliquer. Il ne dispose alors pas du mandat d'Injonction en cours d'Instruction, il ne peut
                        donc rien imposer.<br/>
                        3. Les parties disposent du droit à un avocat, cependant, la Cour n'est pas tenue de leur en
                        fournir un.<br/>
                        4. Le Juge fixe une date d'audience après concertation des parties. Il annonce cette date:<br/>
                        - Soit 48h à l'avance.<br/>
                        - Soit en dessous de ce délai si les deux parties l'approuve.<br/>
                        5. Pour commencer l'audience la présence du Juge, et d'un représentant (la personne elle
                        même ou bien son avocat, ou une personne le représentant par procuration écrite) de
                        chaque partie est nécessaire, sauf après deux convocations légales faisant échec, la
                        contumace est décidée par le juge, décision transmise aux parties.<br/>
                        6. L'audience se déroulera comme en matière pénale (distribution de la parole, etc), à la
                        différence prêt que le Défendeur (équivalent de l'accusé au pénal) devra dire s' il "reconnaît"
                        ou non les faits que lui reproche le demandeur, il n'y a donc pas de plaider "coupable" ou
                        "non coupable". On parle alors de "responsabilité" et non de "culpabilité".<br/>
                        7. Le Juge peut, de la même manière qu'en matière Pénale, faire appel à des témoins, des
                        experts, et des appelés.
                    </p>
                    <h3>Article 4 - Verdict d'un litige</h3>
                    <p>1. Il n'existe pas de "condamnation" possible. Le verdict se pose sur les mêmes conditions
                        qu'en matière pénale (consensus entre le Président et ses assesseurs, recherche de la
                        vérité, etc) à ceci prêt que la loi civile ne prévoit aucune peine.<br/>
                        2. A l'annonce de son verdict, le Juge, tenant compte des Lois, des arguments des parties,
                        de l'Intérêt Collectif, des Libertés Fondamentales, et de la Vérité, prononcera son verdict,
                        dont il est possible de faire appel dans les mêmes conditions qu'en matière pénale.<br/>
                        3. Le verdict mentionne deux éléments:<br/>
                        ° La reconnaissance ou non du dommage<br/>
                        ° (Dans le cas où le dommage est reconnu) L'Injonction émise par Mandat d'Injonction
                        (similaire à celui définit dans le Code de Procédure Pénale)<br/>
                        4. En cas de demande de dédommagement, le Juge évalue le montant du préjudice subi, et
                        peut (éventuellement) accorder des intérêts en plus, d'un montant maximum de 25% du
                        montant du préjudice reconnu.
                    </p>
                    <h2>Chapitre III - Loi, décret-loi, contrat</h2>
                    <h3>Article 1 - Lois et décrets-lois</h3>
                    <p>1. Le Décret-loi est le texte qui, provisoirement, met en place une dérogation à la loi, ou en
                        établit/retire une. Il se justifie par une réalité à laquelle il est de l'intérêt de la Loi, de la
                        Justice, et de la Société, de pallier.<br/>
                        2. La Loi est le texte qui, jusqu'à son abrogation, met en place un principe que tous doivent
                        respecter.<br/>
                        3. Le Décret-loi, s' il est Pénal, ne peut aboutir à une détention supérieure à quatre ans, et
                        plus de $40.000 d'amende (sauf si il s'appuie sur une loi préexistante).<br/>
                        4. L'Arrêté Municipal est le texte qui précise l'application de la loi ou du décret-loi dans des
                        domaines restreints (finance, économie, usagers de la route, éducation, santé, etc.). Il peut
                        porter sur une personne ou un groupe de personnes et demeure soumis aux lois et aux
                        décret-lois.
                        Avant d'être publié et exécuté, il doit être approuvé par le Gouverneur. Après contestation
                        explicite par un citoyen visé par l'Arrêté Municipal, il peut être abrogé par une décision
                        expresse d'un Juge de la Cour de Justice, saisi de la contestation. Cette décision de justice
                        doit être motivée par des raisons sérieuses et justifiées, et doit être publiée dans les
                        comptes-rendus publics.<br/>
                        5. L'Arrêté Municipal, s'il est Pénal, ne peut aboutir à une détention supérieure à 10 mois, et
                        plus de $10.000 d'amende (sauf si il s'appuie sur une loi préexistante).
                    </p>
                    <h3>Article 2 - Contrat</h3>
                    <p>1. Le Contrat est l'accord pris par plusieurs personnes physiques ou morales. Il est un
                        engagement sur l'Honneur et se doit d'être respecté sans (tentative de) contournement,
                        fraude, abus, violation, usurpation ou falsification.<br/>
                        2. Les contrats se définissent par leur nature:<br/>
                        - Informel: Il est un accord entendu, convenu, et compris. Il s'agit d'une "convention", d'une
                        "entente", ou d'une "coutume" non signées et donc possiblement orale.<br/>
                        - Formel: Accord rédigé entre personnes, signé, et distribué à tous les signataires.<br/>
                        - Officiel: Accord rédigé entre personnes, signé, et distribué à tous les signataires ainsi qu'à
                        l'Huissier ayant constaté de la Signature.<br/>
                        - Public: C' est un engagement face à la loi, le contourner est donc un mensonge à une
                        administration. Il est homologué par le Gouverneur, et ne peut être brisé que par une Cour
                        de Justice.<br/>
                        3. Sont Huissiers: Le Maire, ses adjoints, les membres autorisés du Service d'Inspection et
                        d'Administration, et les Avocats Officialisés. Les magistrats (procureur, substituts du
                        Procureur, juge, président de la Cour) sont également des Huissiers dans l'exercice de leurs
                        fonctions judiciaires.<br/>
                        4. Le contrat implique des "signataires" qui après signature devront fournir une "contrepartie"
                        de la forme définie par le contrat. Ce qui est prévu par le contrat est appelé une "Clause".
                        Note: La "Contrepartie" n'est pas nécessairement un bien, par exemple dans le cas d'un
                        contrat sur le secret, la contrepartie est le fait de ne pas révéler le dit secret.<br/>
                        5. Le contrat peut être rompu sous le respect de certaines clauses.
                    </p>
                    <h2>Chapitre IV - Droit Politique</h2>
                    <h3>Article 1 - Droit Politiques</h3>
                    <p>1. Nul ne peut se voire priver de son droit de vote<br/>
                        2. Une Cour peut retirer, après une condamnation pour un fait ou plusieurs puni(s) de plus
                        d'un an de détention, retirer le droit d'un individu d'exercer une fonction Publique, et donc
                        par extension: de se présenter à une élection.<br/>
                        3. Le Vote est secret, privé, et libre. Contrevenir à cela serait une atteinte aux intérêts
                        fondamentaux de la Nation.<br/>
                        4. Le Vote et la candidature à une élection peuvent se faire par toute personne majeure
                        (plus de 18 ans).
                    </p>
                    <h3>Article 2 - Association</h3>
                    <p>1. Au nom du Premier Amendement, le Gouvernement devra permettre à tous les
                        mouvements légaux de s'exprimer, en veillant à leur Sécurité et à l'Ordre Public.
                    </p>
                    <h3>Article 3 - Droits médiatiques</h3>
                    <p>1. Les citoyens exerçant officiellement la profession de journaliste peuvent se prévaloir des
                        autorisations suivantes.<br/>
                        2. Les journalistes ont les autorisations primordiales suivantes :
                        Autorisation d'approche, de stationnement, et d'émission d'ondes radio des véhicules et des
                        journalistes, près et à l'extérieur des barrages posés par les forces de l'ordre ;
                        Autorisation d'évaluer un nombre total des otages présents, s'il y en a ;
                        Autorisation d'évaluer un nombre total des braqueurs, preneurs d'otage, malfaiteurs
                        présents ;
                        Autorisation d'interviewer des responsables des forces de police présents et de demander
                        des informations sur la situation en cours (mais pas forcément d'en recevoir en retour) ;
                        Autorisation de suivre et d'émettre sur une course-poursuite de véhicules à quatre ou deux
                        roues, en hélicoptère uniquement et à une altitude minimale de 150 mètres de haut.<br/><br/>
                        3. Les journalistes ont les autorisations secondaires suivantes :<br/>
                        Autorisation d'indiquer à l'antenne la survenance d'un assaut lorsque celui-ci commence et
                        non pas avant ;<br/>
                        Autorisation d'évaluer un nombre total des membres de forces de l'ordre présents sur
                        l'intégralité de la zone ;<br/>
                        Autorisation de survol par un hélicoptère d'une entreprise médiatique à une altitude de plus
                        de 150 mètres des zones de braquage, de prise d'otage, et d'autres opérations policières.<br/><br/>
                        4. Les journalistes ont les interdictions suivantes :<br/>
                        Interdiction de franchissement de barrage, quelles qu'en soient les raisons ;<br/>
                        Interdiction de donner la position et le nombre de snipers postés ;<br/>
                        Interdiction de donner la position et le nombre des membres et/ou des équipes du SWAT
                        impliqués dans un assaut futur.<br/><br/>
                        5. Un cas de nécessité absolue se définit comme une situation d'une gravité extrême,
                        présentant de très fortes probabilités de nuire à l'intégrité physique d'une grande partie des
                        intervenants (civils, forces de l'ordre). Dans un cas de nécessité absolue, les autorisations
                        secondaires (cf 3.) disparaissent et sont considérées comme des interdictions, à condition
                        que ce soit un haut-responsable des forces de l'ordre qui en prenne préalablement la
                        décision de manière express.
                    </p>
                    <h2>Chapitre V - Droit du travail et de l'entreprise</h2>
                    <h3>Article 1 - Définitions générales</h3>
                    <p>1. Le Travail est l'apport convenu d'une contribution à un projet, une tâche, une mission, ou
                        une production se faisant parfois en échange d'une contrepartie. Il se doit d'être déclaré et
                        contrôlé.<br/>
                        L'assistance, et la production personnelle, ne se déclarent pas. L'entraide au sein d'une
                        famille, ou d'un cercle de proches (amis et/ou famille) ne se déclare pas non plus.
                        Le Travail se fait donc en Entreprise si il est rémunéré, ou en Association si il est bénévole. Il
                        peut également se faire en Institution (notamment pour les fonctionnaires), il est en ce cas
                        rémunéré également.<br/>
                        Note: dans ce chapitre, les Institutions seront soumises à la même réglementation que les
                        entreprises, sauf en matière de concurrence, puisqu'elles servent l'intérêt de la Justice, de la
                        Nation, de la Loi, et de la Société.<br/>
                        2. L'entreprise est formée après approbation du Gouvernement, elle dispose d'un capital,
                        d'objectifs, d'une structure réglementée.<br/>
                        3. La Compagnie regroupe plusieurs entreprises, elle est formée sur approbation du
                        Gouvernement.<br/>
                        4. L'Association est la formation autorisée par le Gouvernement, d'un groupe de personnes
                        (au moins quatre) œuvrant et se réunissant autour d'un but commun et spécifique, sans but
                        lucratif.
                    </p>
                    <h3>Article 2 - Le Gouvernement et le travail</h3>
                    <p>1. Le Gouvernement peut mettre en place un système de "licences" a acheter (à un prix fixe
                        et égal pour tous) pour pouvoir former une Entreprise ou une Compagnie.<br/>
                        2. Le Gouvernement s'assure, par le biais de contrôles, du respect de la libre concurrence,
                        de l'égalité entre entreprises, et des bonnes conditions de travail.<br/>
                        3. La création d'une entreprise, d'une compagnie, ou d'une association se fait sur Contrat
                        Public. Celui-ci mentionne les caractéristiques de la personne morale ainsi créée, ses
                        règles, et ses engagements</p>
                    <h3>Article 3 - Condition de travail</h3>
                    <p>1. Le travail est compatible avec la vie privée, l'équilibre psychologique et physique, et
                        l'intérêt du Travailleur.<br/>
                        2. Il se fait de manière sécurisée, respectueuse, digne, et mutuellement profitable.<br/>
                        3. Au travail, la différenciation est faite entre les personnes selon et uniquement selon leur
                        travail. Dès lors les embauches, licenciement, et autres mesures de gestion du personnel
                        seront motivées par l'efficacité de l'employé, et non par sa relation avec l'employeur, ou un
                        motif discriminant (prévu dans le Code Pénal).
                    </p>
                    <h2>Chapitre VI - Droit de la Famille & de la Propriété</h2>
                    <h3>Article 1 - Contrat</h3>
                    <p>1. Le Mariage est un contrat Public. Il est l'association reconnue par le Gouvernement et/ou
                        Mairie, entre deux personnes physiques.<br/>
                        2. Il est motivé par le désir de vivre en commun, de s'aimer, et de former une famille.<br/>
                        3. La Polygamie est permise. Nul ne peut célébrer un mariage avant la signature officielle du
                        “Contrat Public de Mariage” (il s'agirait sinon d'une usurpation du titre de Maire).<br/>
                        4. Le Contrat de Mariage implique des clauses définies par la Mairie/Gouvernement.
                    </p>
                    <h3>Article 2 - La vie de Famille</h3>
                    <p>1. Les époux se doivent de vivre ensemble, de ne pas entretenir une relation amoureuse
                        et/ou sexuelle extra conjugale, de se respecter, s'assister, et s'écouter mutuellement.<br/>
                        2. Tout enfant doit respect, écoute, et assistance à ses parents, et vice versa.
                    </p>
                    <h3>Article 3 - La Propriété</h3>
                    <p>1. La Propriété est un bien, une donnée, ou un animal de compagnie.<br/>
                        2. Le seul moyen d'acquérir un bien est de se le faire donner ou vendre par son propriétaire.<br/>
                        3. Si elle n'a pas de propriétaire, une propriété est au Gouvernement.<br/>
                        4. L'usage, l'exploitation, l'entretien, l'ouverture, la fermeture, l'accès, la vente, et l'achat de
                        propriétés sont libres tant que celles-ci respectent la Vie, la Loi, la Justice, la Dignité, et la
                        Personne.<br/>
                        5. Il est impossible de posséder (sauf pour le Gouvernement) un bien de l'État, de la Nation,
                        ou un bien Public telle que la Voie Publique, un Péage, une Institution, ou un
                        bien/donnée/élément reconnu d'intérêt public.</p>
                    <img src={UnitedStateOfSanAdreas} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default CivilLaw;