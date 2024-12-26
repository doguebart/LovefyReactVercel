export const Termos = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container mx-auto px-6 py-14 bg-gradient-neutral rounded-lg flex flex-col gap-10">
        <h1 className="text-center text-4xl font-bold text-rosa-ilovefy">
          Termos de uso
        </h1>
        <p className="text-neutral-600 text-center">
          Última atualização: <strong>26/12/2024</strong>
        </p>
        <div className="flex flex-col gap-10 text-justify">
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-rosa-ilovefy">
              1. Aceitação dos Termos
            </h2>
            <p className="text-neutral-600 font-light">
              Ao acessar e utilizar a nossa plataforma, você concorda em cumprir
              e ficar vinculado aos seguintes Termos de Uso. Caso não concorde
              com qualquer parte destes termos, você não deve utilizar a
              plataforma.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-rosa-ilovefy">
              2. Descrição do Serviço
            </h2>
            <p className="text-neutral-600 font-light">
              Nossa plataforma permite que casais escolham entre dois planos
              para criar uma página personalizada:
            </p>
            <ul className="list-disc pl-6 font-light my-4 flex flex-col gap-4">
              <li className="text-neutral-600">
                <strong className="text-neutral-800">Plano Simples:</strong>{" "}
                Permite adicionar 1 música, 1 foto do casal e mantém a página
                ativa por 6 meses. Inclui o gerenciamento pelo iLovefy.
              </li>
              <li className="text-neutral-600">
                <strong className="text-neutral-800">Plano Completo:</strong>{" "}
                Permite adicionar 1 música, até 5 fotos do casal, 1 áudio
                personalizado (opcional), 1 texto carinhoso com até 60 palavras
                e agendamento para entrega. Inclui o gerenciamento pelo iLovefy.
              </li>
            </ul>
            <p className="text-neutral-600 font-light">
              Após o preenchimento do formulário e a conclusão do pagamento, o
              casal recebe um link com um QR Code via email para acessar sua
              página personalizada. Além disso, a página é gerada
              instantaneamente no site, podendo ser acessada imediatamente após
              a confirmação do pagamento.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-rosa-ilovefy">
              3. Cadastro e Segurança
            </h2>
            <p className="text-neutral-600 font-light">
              Para utilizar o serviço, você deve fornecer um endereço de email
              válido. Não compartilharemos seu email com terceiros.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-rosa-ilovefy">
              4. Privacidade
            </h2>
            <p className="text-neutral-600 font-light">
              Respeitamos a sua privacidade. Não utilizamos seus dados para
              qualquer tipo de processamento ou venda de dados para terceiros. O
              email cadastrado é utilizado apenas para o envio do link da página
              personalizada.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-rosa-ilovefy">
              5. Conteúdo do Usuário
            </h2>
            <p className="text-neutral-600 font-light">
              Você é responsável pelo conteúdo que insere na plataforma,
              incluindo fotos, mensagens e informações do relacionamento. Não
              nos responsabilizamos por qualquer conteúdo impróprio ou ilegal
              carregado pelos usuários.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-rosa-ilovefy">
              6. Pagamentos e Reembolsos
            </h2>
            <p className="text-neutral-600 font-light">
              Pagamentos com cartões de crédito e débito são processados através
              do Stripe. Pagamentos via PIX são processados através do Mercado
              Pago. <br /> <br /> Após a conclusão do pagamento, o casal
              receberá um link para a página personalizada via email. Não
              oferecemos reembolsos, exceto em casos excepcionais a nosso
              exclusivo critério.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-rosa-ilovefy">
              7. Modificações no Serviço
            </h2>
            <p className="text-neutral-600 font-light">
              Nós nos comprometemos a manter o serviço ativo e disponível pelo
              período contratado, conforme o plano escolhido. No entanto, em
              circunstâncias excepcionais que fujam ao nosso controle, como
              questões legais, técnicas ou financeiras, reservamo-nos o direito
              de modificar ou descontinuar o serviço. <br /> <br /> Caso seja
              necessário descontinuar o serviço, tomaremos todas as medidas
              possíveis para notificar os usuários com antecedência e garantir a
              preservação das páginas ou oferecer soluções alternativas sempre
              que possível. <br /> <br /> A iLovefy não se responsabiliza por
              eventuais perdas decorrentes de modificações ou descontinuação em
              situações extraordinárias, mas faremos o possível para minimizar o
              impacto.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-rosa-ilovefy">
              8. Limitação de Responsabilidade
            </h2>
            <p className="text-neutral-600 font-light">
              Em nenhuma circunstância seremos responsáveis por qualquer dano
              indireto, incidental, especial ou consequente decorrente de ou
              relacionado ao uso ou incapacidade de uso da plataforma.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-rosa-ilovefy">
              9. Alterações nos Termos
            </h2>
            <p className="text-neutral-600 font-light">
              Podemos atualizar estes Termos de Uso periodicamente. Quando
              fizermos isso, revisaremos a data da "última atualização" no topo
              desta página. É sua responsabilidade revisar estes Termos de Uso
              periodicamente para se manter informado sobre quaisquer
              alterações.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-rosa-ilovefy">
              10. Contato
            </h2>
            <p className="text-neutral-600 font-light">
              Se você tiver alguma dúvida sobre estes Termos de Uso, entre em
              contato conosco pelo email: suporte@ilovefy.com.br
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
