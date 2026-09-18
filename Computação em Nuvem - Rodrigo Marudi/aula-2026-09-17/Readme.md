# Aula 2026-09-17 — Computação em Nuvem

## O que é Engenharia de Software?
- Não é só código.
- Envolve pessoas e processos.

## Arquitetura Cliente/Servidor
- Modelo de arquitetura onde clientes fazem requisições e o servidor responde/processa.

## Quem participa de um projeto em Cloud
- Product Owner
- UX/UI Designer
- Desenvolvedor
- QA (Tester)
- DevOps/Infra
- Scrum Master / Agile Coach

## Business Model Canvas
Ferramenta de gestão estratégica para visualizar o modelo de negócio.

### Primeiro passo de um benchmarking
- Buscar 3 softwares que fazem o que eu quero fazer.
- Listar o que é bom e o que não é.

## IHC (Interação Humano-Computador)
- Como entendo meu cliente.

> **Boa prática:** faça todos os testes antes de colocar em produção.

## Ferramentas e protocolos citados

- **Snort**: ferramenta de IDS/IPS (Sistema de Detecção/Prevenção de Intrusão) usada para monitorar tráfego de rede em busca de ataques.
- **Data Driven**: abordagem de tomada de decisão baseada em dados.
- **HTTPS**: protocolo de aplicação (HTTP sobre TLS/SSL), garante que a comunicação entre cliente e servidor seja criptografada e autenticada.
- **SNMP** (Simple Network Management Protocol): protocolo usado para monitorar e gerenciar dispositivos de rede (coleta de status, estatísticas e configuração).

## `tracert` — para que serve

O `tracert` (Windows) / `traceroute` (Linux) mostra o caminho (saltos/roteadores) que os pacotes percorrem até o destino, além do tempo de resposta (latência) de cada salto. É útil para diagnosticar lentidão ou falhas de conexão na rede.

Exemplo de execução:

```
C:\Windows\System32>tracert unifeob.edu.br

Rastreando a rota para unifeob.edu.br [185.139.2.143]
com no máximo 30 saltos:

  1   503 ms    16 ms   182 ms  177-0-0-1.dsl.brasiltelecom.net.br [177.0.0.1]
  2     4 ms     *        2 ms  186-201-135-81.customer.tdatabrasil.net.br [186.201.135.81]
  3     6 ms     5 ms     5 ms  186.200.22.85
  4     7 ms     7 ms     6 ms  ae3000.0.edge2.gru2.as7195.net [200.25.56.18]
  5    40 ms    30 ms    28 ms  ae10.0.edge1.gru2.as7195.net [200.25.51.64]
  6    67 ms    17 ms    18 ms  ae1271.0.edge7.gru1.as7195.net [200.25.51.134]
  7    23 ms    22 ms    27 ms  200.25.58.95
  8    38 ms    60 ms    26 ms  2.25.25.12
  9     *        *        *     Esgotado o tempo limite do pedido.
 10    17 ms    18 ms    21 ms  185.139.2.143

Rastreamento concluído.
```

## RAID, espelhamento e redundância

> Anotação original: "hide - 01,02,03" — provavelmente refere-se aos níveis de **RAID** (RAID 0, RAID 1, ...), já que o tópico está junto de "espelhamento" e "redundância". Vale confirmar com o professor/slides.

- **Espelhamento (mirroring)**: gravar os mesmos dados em dois ou mais discos simultaneamente, para redundância.
- **RAID 0**: divide os dados entre discos (striping), ganha performance mas não tem redundância.
- **RAID 1**: espelha os dados entre discos, prioriza redundância sobre performance.

### Ping em lote
- Executar `ping` para múltiplos hosts de uma vez (via script/lista), útil para verificar disponibilidade de vários servidores/IPs rapidamente.

### Prompt injection em currículos
- Técnica de inserir texto oculto (ex.: fonte branca, tamanho zero) em um currículo para manipular sistemas de triagem automatizada (ATS/IA) e fazê-lo subir no ranking de forma enganosa.

## VMware ESXi
- **O que é**: hypervisor da VMware para virtualização de servidores.
- **VMware Converter**: ferramenta para converter máquinas físicas ou virtuais de outros formatos para VMs compatíveis com VMware.
- Pode ser usado para migrar servidores inteiros (com a aplicação rodando) para a nuvem.
- **Tipos de hypervisor**:
  - **Tipo 1 (bare-metal)**: roda direto sobre o hardware (ex.: ESXi, Hyper-V).
  - **Tipo 2 (hosted)**: roda sobre um sistema operacional já instalado (ex.: VirtualBox, VMware Workstation).

## Redundância híbrida
- Rodar uma aplicação com redundância local **e** em nuvem, usando storage de backup — garante disponibilidade mesmo se um ambiente falhar.

## Teste de carga
- Ferramenta citada em aula (nome anotado como "Usebarry" — confirmar grafia correta) para **teste de carga**, que simula muitos usuários/requisições simultâneas para avaliar o comportamento do sistema sob estresse.

## Conceitos de arquitetura de software

- **Software legado**: sistema antigo, muitas vezes com tecnologia desatualizada, mas que ainda está em uso e é crítico para o negócio.
- **Sistema monólito**: aplicação construída como uma única unidade indivisível, onde todos os módulos (UI, lógica de negócio, acesso a dados) rodam juntos no mesmo processo.
- **Microsserviços**: arquitetura onde a aplicação é dividida em serviços pequenos, independentes e implantáveis separadamente, que se comunicam entre si (geralmente via API/rede).
- **Docker**: ferramenta de containerização — empacota tudo o que a aplicação precisa para rodar (código, dependências, bibliotecas, configurações) em um container isolado e portátil.


Servidor de proxy

endian firewall - criar primeiro servidor brasileiro

## Tarefas / Para estudar

- [ ] Estudar **ITIL Foundation**.
- [ ] Estudar **Cobit** 
- [ ] Estudar e buscar por "ingles Winer"
- [ ] Encontrar recrutadores de nível pleno e sênior no LinkedIn.
- [ ] FAZER CURSO E POSTAR POSTS DE CERTIFICADOS
- [ ] Buscar pelo site: indeed
- [ ] Bootcamps pelo dio: FAZER BOOTCAMPS APENAS NAS EMPRESAS PROXIMAS DE ABRIR ESTAGIO
- [ ] Ver vagas remotas em: GFT technologies | 2RPnet | CIEE | Curriculum
- [ ] Buscar vagas em empresas colocando o nome da empresa + gupy ou inteli na url do navegador
- [ ] Começar a fazer gestão de tempo via agenda google + IA
