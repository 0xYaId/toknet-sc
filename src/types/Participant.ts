export interface Participant {
  publicKey: string;
  role: 'Supplier' | 'Transporter' | 'Hub' | 'Client';
}

