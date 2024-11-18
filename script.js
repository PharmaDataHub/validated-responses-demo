function showDetails(medicationId) {
    const details = {
        med1: {
            "Quais são as principais indicações terapêuticas do RINVOQ?": "O RINVOQ é indicado para tratar:<br>Artrite reumatóide ativa moderada a grave em adultos. <br>Artrite psoriática ativa em adultos.<br>Espondilartrite axial, incluindo formas não-radiográficas e espondilite anquilosante ativa.<br>Dermatite atópica moderada a grave em adultos e adolescentes com idade ≥ 12 anos.<br>Colite ulcerosa ativa moderada a grave.<br>Doença de Crohn ativa moderada a grave",
            "Qual é a posologia recomendada para o tratamento da artrite reumatóide com RINVOQ?": "A dose recomendada é de 15 mg uma vez por dia.<br> A descontinuação deve ser considerada em casos sem resposta clínica após 16 semanas",
            "Quais são as contraindicações do uso de RINVOQ?": "O uso é contraindicado em pacientes com:<br>Hipersensibilidade ao princípio ativo ou excipientes.<br>Tuberculose ativa ou outras infecções graves.<br>Compromisso hepático grave.",
            "Quais são as reações adversas mais comuns associadas ao RINVOQ?": "Reações adversas frequentes incluem:<br>Infecções do trato respiratório superior.<br>Aumento da creatina fosfocinase (CPK).<br>Acne, herpes simples, e neutropenia.Náuseas e aumento de enzimas hepáticas (ALT e AST)",
            "Quais cuidados devem ser tomados com pacientes acima de 65 anos ao usar RINVOQ?": "Esses pacientes têm maior risco de eventos adversos, incluindo MACE (eventos cardiovasculares maiores), infecções graves e neoplasias malignas.<br> Deve-se usar a dose mínima eficaz (15 mg por dia) e apenas se alternativas não forem adequadas​"
        },
        med2: {
            "Qual é a indicação principal do Ozempic?": "O Ozempic é indicado para o tratamento de adultos com diabetes mellitus tipo 2 insuficientemente controlada, como adjuvante à dieta e ao exercício. Pode ser usado em monoterapia, quando a metformina é inapropriada devido a intolerância ou contraindicações, ou em combinação com outros medicamentos para diabetes",
            "Como deve ser administrado o Ozempic?": "O Ozempic deve ser administrado por via subcutânea no abdómen, coxa ou braço, uma vez por semana, a qualquer hora do dia, com ou sem alimentos. É importante evitar a administração intravenosa ou intramuscular.",
            "Quais são as reações adversas mais comuns associadas ao uso do Ozempic?": "As reações adversas mais frequentes são náuseas, diarreia e vômitos. Estas reações geralmente são leves a moderadas e de curta duração, mas podem levar à interrupção do tratamento em alguns casos.",
            "O Ozempic pode ser usado em pacientes com comprometimento renal ou hepático?": "Sim, o Ozempic pode ser utilizado em pacientes com comprometimento renal ou hepático leve a moderado sem necessidade de ajuste de dose. No entanto, a experiência é limitada em casos graves, sendo necessário cuidado adicional nesses casos",
            "O que fazer em caso de omissão de uma dose?": "Se uma dose for omitida, ela deve ser administrada o mais rapidamente possível dentro de um prazo de 5 dias. Caso tenham passado mais de 5 dias, a dose omitida deve ser ignorada e o paciente deve retomar a posologia normal no dia previamente estabelecido.",

        },
        med3: {
            name: "Acetylsalicylic Acid 100 mg",
            description: "Oral Tablet",
            dosage: "100 MG",
            frequency: "1x daily",
            startDate: "2021-03-30",
        },
        med9: {
            "1. Quais são as principais indicações terapêuticas da Lenalidomida Tecnigen?": "A Lenalidomida Tecnigen é indicada para:<br><br>Mieloma múltiplo:<br>Tratamento de manutenção em pacientes adultos recém-diagnosticados após transplante autólogo de células-tronco.<br>Em combinação com outros medicamentos (dexametasona, bortezomibe ou melfalano e prednisona) para pacientes inelegíveis ao transplante ou que já receberam pelo menos um tratamento anterior.<br>Linfoma folicular: Em combinação com rituximabe, para pacientes adultos previamente tratados​(Lenalidomida_Tecnigen_M…).",
            "2. Quais são os ajustes de dose recomendados para trombocitopenia ou neutropenia?": "Trombocitopenia:<br>Interromper o tratamento quando as plaquetas caírem para níveis críticos (ex.: < 25 x 10⁹/L).<br>Retomar em níveis ajustados ao recuperar valores aceitáveis​(Lenalidomida_Tecnigen_M…).<br>Neutropenia:<br>Interromper o tratamento quando a contagem de neutrófilos cair abaixo de 0,5 x 10⁹/L.<br>Considerar fatores de crescimento e retomar a dose reduzida quando os valores recuperarem​(Lenalidomida_Tecnigen_M…).<br>",
            "3. Quais são as principais contraindicações?": "Hipersensibilidade à lenalidomida ou aos excipientes.<br>Gravidez devido ao alto risco de teratogenicidade.<br>Mulheres com potencial para engravidar, salvo sob rígidas condições do Programa de Prevenção da Gravidez​(Lenalidomida_Tecnigen_M…).<br>",
             "4. Quais precauções são recomendadas para evitar a teratogenicidade?": "Mulheres em idade fértil devem usar métodos contraceptivos eficazes pelo menos 4 semanas antes de iniciar o tratamento e até 4 semanas após o término.<br>Testes de gravidez regulares (mensais) supervisionados por um médico são mandatórios.<br>Homens tratados com lenalidomida devem usar preservativos durante relações sexuais para prevenir exposição ao feto, mesmo após vasectomia​(Lenalidomida_Tecnigen_M…).<br>",
             "5. Como deve ser administrado o medicamento?": "Via oral, no mesmo horário diariamente, com ou sem alimentos.<br>As cápsulas devem ser ingeridas inteiras, sem serem abertas, partidas ou mastigadas.<br>Recomenda-se cuidado ao retirar a cápsula do blister para evitar danos​(Lenalidomida_Tecnigen_M…).<br>"
        },
        med10: {
            "Quais são as principais indicações terapêuticas do Ciplox?": "O Ciplox está indicado para o tratamento de várias infeções bacterianas, incluindo:<br><br>Infeções respiratórias (pneumonia, bronquites, exacerbações da doença pulmonar obstrutiva crónica).<br>Infeções do trato urinário (cistite, pielonefrite, prostatite bacteriana).<br>Doenças de transmissão sexual, como uretrite e cervicite gonocócica.<br>Infeções gastrointestinais (ex.: diarreia do viajante).<br>Antraz por inalação.<br>Deve-se consultar o médico antes de iniciar o tratamento, especialmente em casos de resistência bacteriana​(Ciplox_MGComprimido_rev…).",
            "Quais são os efeitos adversos mais comuns associados ao Ciplox?": "Os efeitos adversos mais comuns incluem:<br><br>Náuseas.<br>Diarreia.<br>Dor abdominal.<br>Tonturas.<br>Em casos raros, podem ocorrer reações alérgicas graves, alterações no sistema nervoso central (como convulsões), ou problemas musculosqueléticos, como tendinite e rutura de tendão​(Ciplox_MGComprimido_rev…).<br>",
            "Como deve ser administrado o Ciplox?": "O Ciplox deve ser ingerido com líquido, sem mastigar. Pode ser tomado independentemente das refeições, mas sua absorção é mais rápida com o estômago vazio. Evite tomá-lo com produtos lácteos ou sucos enriquecidos com minerais, pois podem interferir na sua eficácia​(Ciplox_MGComprimido_rev…).<br><br>",
            "Quais são as contraindicações do uso do Ciplox?": "O Ciplox não deve ser usado em casos de:<br><br>Hipersensibilidade à ciprofloxacina ou outras quinolonas.<br>Uso concomitante de tizanidina.<br>Histórico de reações adversas graves às fluoroquinolonas, como tendinite ou neuropatia​(Ciplox_MGComprimido_rev…).<br>",
            "O Ciplox é seguro para uso em crianças e grávidas?": "Crianças: Pode ser utilizado em casos específicos, como infeções graves, mas requer avaliação cuidadosa devido ao risco de artropatia.<br>Grávidas: Embora não haja evidências claras de malformações, recomenda-se evitar o uso durante a gravidez devido ao potencial risco de danos à cartilagem do feto.<br>Amamentação: Não deve ser usado, pois a ciprofloxacina é excretada no leite materno​(Ciplox_MGComprimido_rev…).<br>"
        }
    };

    const detailElement = document.getElementById("medication-details");
    if (details[medicationId]) {
        const med = details[medicationId];
        let content = "";

        for (const key in med) {
            content += `<p><strong>${key}:</strong><br> ${med[key] || "N/A"}</p>`;
        }

        detailElement.innerHTML = content;
    } else {
        detailElement.innerHTML = `<p>No details available for this medication.</p>`;
    }
}
