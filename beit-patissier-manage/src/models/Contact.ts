export interface ContactDTO {
    contactId: number;
    userId?: number;
    userName: string;
    email: string;
    phone: string;
    message: string;
    subject: string;
    status: number; // 0 = Open, 1 = Closed
}
export class Contact {
    contactId: number;
    userId?: number;
    userName: string;
    email: string;
    phone: string;
    message: string;
    subject: string;
    status: "פתוח" | "סגור";

    constructor(dto: ContactDTO) {
        this.contactId = dto.contactId;
        this.userId = dto.userId;
        this.userName = dto.userName;
        this.email = dto.email;
        this.phone = dto.phone;
        this.message = dto.message;
        this.subject = dto.subject;

        this.status = dto.status === 0 ? "פתוח" : "סגור";
    }
}
export const ContactFieldLabels: Record<string, string> = {
    contactId: "מס' פנייה",
    userId: "מס' משתמש",
    userName: "שם",
    email: "אימייל",
    phone: "טלפון",
    message: "הודעה",
    subject: "נושא",
    status: "סטטוס",
};
