# What it does
**Nexus** is a cutting-edge Vertex AI Powered Chatbot which behaves like a personal assistant to all your work and personal related tasks. It offers a range of features which includes
- Calendar management
- Email organization
- Meeting Preparation and Follow-up
- Automated responses for approvals
-  Research and Reporting

## For User ##
**Professional Purpose**
1. **Calendar Management**:
    - Scheduling and coordinating meetings, appointments, and events.
    - Managing travel arrangements, including flights, accommodations, and itineraries.
2. **Communication**:
    - Handling correspondence, including emails, phone calls, and mail.
    - Acting as a gatekeeper, filtering communication and determining which issues require the CEO's attention.
3. **Meeting Preparation and Follow-up**:
    - Preparing agendas, documents, and presentations for meetings.
    - Taking minutes and following up on action items.
4. **Project Management**:
    - Assisting with the planning and execution of projects.
    - Tracking deadlines, progress, and ensuring tasks are completed on time.
5. **Office Management**:
    - Maintaining an organized and efficient office environment.
    - Liaising with other staff members, departments, and external stakeholders.
6. **Research and Reporting**:
    - Conducting research and compiling data to assist the CEO in decision-making.
    - Preparing reports and summaries.

 **Personal Responsibilities**

1. **Personal Errands**:
    - Managing personal errands such as shopping, appointments, and household management.
    - Coordinating with household staff if applicable.
2. **Travel and Leisure**:
    - Planning personal travel, vacations, and leisure activities.
    - Managing travel logistics and ensuring smooth transitions between professional and personal activities.
3. **Financial Management**:
    - Assisting with personal finances, including bill payments, budgeting, and investment tracking.
    - Coordinating with accountants, financial advisors, and other professionals.
4. **Family Coordination**:
    - Managing family schedules and activities.
    - Assisting with children's school and extracurricular activities if applicable.

                                       Adding New Items to Layout

![Changing items](https://github.com/M-sasank/square-ai-hackathon/blob/main/website/src/assets/dnd.gif?raw=true)

                                       Changing Layout

- **Data-Driven Insights**: Storeguide's AI analyzes invoices and creates user graphs, enabling business owners to recognize patterns and gain valuable insights into customer behavior. These insights help in making informed decisions to enhance store performance.

- **Custom Gift Cards**: Leveraging the invoice data, business owners can create custom gift cards tailored to specific user groups. When similar invoices are generated in the future, these custom gift cards can be gifted to customers, enhancing loyalty and driving sales.

In summary, Storeguide offers a unique combination of convenience, data-driven decision-making, and personalization for both customers and business owners, making the shopping experience enjoyable and insightful for all.

## How we built it
- **Square APIs used**:
    - Auth: To let any seller to connect with our app to gain insights, send gift cards and add/modify layouts.
    - Orders: To generate orders for a customer
    - Invoice: To generate an invoice for a customer's order
    - Gift Cards: To send gift cards to customer groups
    - Customers: To create/retrieve customers when placing orders
    - Catalog: To add/retrieve store items
    - Inventory: To check store items and display them in the layout

- **Google Cloud Tools used**:
    - PaLM: For interaction with user, generating user graphs, calculating optimal path
    - Google Cloud Run: For deploying containerized backends, Machine Learning and AI models used for this project
    - Google Text-to-Speech: For generating voiceovers and voice replies to user.

**Technologies**: React, JavaScript, FastAPI, Docker, Google Cloud
## Challenges we ran into
- Working our way through the documentations of Sqaure APIs and SDKs was difficult initially
- Accurately generating user graphs based on invoice data was quite difficult
- Validation of PaLM responses. PaLM occasionally gives unexpected responses

## Accomplishments that we're proud of
- We are proud to have developed an innovative and cutting-edge AI-powered solution that has the potential to revolutionize the retail industry. 
- Our uniquely themed, interactive front-end layout design of the store, that allows shop keepers to change layout anytime.
- Our team's ability to overcome various challenges during the development process.

## What we learned
-  We aimed to create a unique solution in a competitive market, and this required a ton of research, thinking creatively, and understanding the market needs.
- We learned how to effectively integrate third-party APIs into our application, enabling us to access and manipulate data from these services.
-  We learned how to analyze data to recognize patterns and derive valuable insights for business owners
- We learnt how to use PaLM AI and are now confident enough to use it in our future projects.

## What's next for Storeguide
Storeguide has so much space it can expand its reach into thereby, enhancing its capabilities, and adapting to the evolving needs of the retail market. Few of these points are:

- Storeguide can continue to evolve by improving its AI capabilities. For example, a continuously improving AI and NLP models can give better customer interactions, smarter recommendations, and an even more accurate understanding of customer behavior day by day.
- Storeguide can get integrate other Square endpoints such as, Loyalty Program, Payments, etc.
- The application can be expanded beyond grocery stores to clothing stores, electronics stores, or even larger department stores.
-  Implementing a feedback system where customers can rate their shopping experiences and provide suggestions
