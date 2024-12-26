export const PoliticaPrivacidade = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container mx-auto px-6 py-14 bg-gradient-neutral rounded-lg flex flex-col gap-10">
        <h1 className="text-center text-4xl font-bold text-rosa-ilovefy">
          Política de Privacidade
        </h1>
        <p className="text-neutral-600 text-center">
          Última atualização: <strong>26/12/2024</strong>
        </p>
        <div className="flex flex-col gap-10 text-justify">
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-rosa-ilovefy">
              1. Coleta de Informações
            </h2>
            <p className="text-neutral-600 font-light">
              Coletamos informações fornecidas diretamente por você, como o
              endereço de email utilizado para criar sua página personalizada.
              Não coletamos dados sensíveis ou compartilhamos suas informações
              com terceiros sem o seu consentimento.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-rosa-ilovefy">
              2. Uso das Informações
            </h2>
            <p className="text-neutral-600 font-light">
              Utilizamos os dados coletados apenas para os seguintes propósitos:
            </p>
            <ul className="list-disc pl-6 font-light my-4 flex flex-col gap-4">
              <li className="text-neutral-600">
                Gerar e enviar o link da página personalizada via email.
              </li>
              <li className="text-neutral-600">
                Garantir a segurança e funcionalidade da plataforma.
              </li>
              <li className="text-neutral-600">
                Fornecer suporte ao cliente em caso de dúvidas ou problemas.
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-rosa-ilovefy">
              3. Armazenamento de Dados
            </h2>
            <p className="text-neutral-600 font-light">
              Os dados fornecidos são armazenados de forma segura e protegidos
              contra acesso não autorizado. Mantemos as informações apenas pelo
              tempo necessário para os fins descritos nesta política.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-rosa-ilovefy">
              4. Compartilhamento de Dados
            </h2>
            <p className="text-neutral-600 font-light">
              Não compartilhamos seus dados com terceiros, exceto quando exigido
              por lei ou para cumprir as finalidades previstas nesta política,
              como o processamento de pagamentos por meio de serviços
              confiáveis.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-rosa-ilovefy">
              5. Direitos dos Usuários
            </h2>
            <p className="text-neutral-600 font-light">
              Você tem o direito de acessar, corrigir ou excluir suas
              informações pessoais armazenadas por nós. Para exercer esses
              direitos, entre em contato através do email:
              suporte@ilovefy.com.br.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-rosa-ilovefy">
              6. Atualizações na Política de Privacidade
            </h2>
            <p className="text-neutral-600 font-light">
              Podemos atualizar esta Política de Privacidade periodicamente. Ao
              fazer isso, revisaremos a data da "última atualização" no topo
              desta página. Recomendamos que você revise esta política
              regularmente para se manter informado sobre quaisquer alterações.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-rosa-ilovefy">
              7. Contato
            </h2>
            <p className="text-neutral-600 font-light">
              Se você tiver alguma dúvida sobre esta Política de Privacidade,
              entre em contato conosco pelo email: suporte@ilovefy.com.br.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
