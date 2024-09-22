import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    {
      question: '1. What is contract farming?',
      answer: 'Contract farming is a system where farmers and buyers enter into pre-agreed contracts that ensure stable prices and secure payments, minimizing risks for both parties. Farmers get assured buyers, and buyers receive dependable, high-quality produce.'
    },
    {
      question: '2. How are contracts secured on the platform?',
      answer: 'Our platform offers government-backed contracts to ensure fair trades. The involvement of government bodies guarantees strict legal actions in case of contract breaches.'
    },
    {
      question: '3. How does the platform support farmers in different regions?',
      answer: 'Our platform offers multi-language support and regional assistance to ensure farmers from all areas can easily access and use the platform.'
    },
    {
      question: '4. How does the platform handle crop failure?',
      answer: 'If a farmer experiences crop failure, government schemes will provide financial help or insurance, ensuring the farmers livelihood is protected.'
    },
    {
      question: '5. Are payments on the platform secure?',
      answer: 'Yes, we use blockchain-based payment systems to ensure all transactions are safe, private, and transparent. This guarantees secure payment methods while protecting user privacy.'
    },
    {
      question: '6. What technologies are used for future updates?',
      answer: 'We plan to incorporate Artificial Intelligence (AI) and IoT technologies for enhanced farm management techniques, contract automation, and risk analysis in future updates.'
    },
    {
      question: '7. How does the platform ensure price stability?',
      answer: 'Our contracts feature pre-arranged terms with a fixed pricing structure, ensuring farmers receive a minimum guaranteed price for their produce, reducing income volatility.'
    },
    {
      question: '8. What are the benefits of using this platform for farmers?',
      answer: 'Farmers benefit from assured market access, income stability, reduced risk, and secure transactions. The platform also automates contract execution to guarantee timely payments.'
    },

  ];
}
