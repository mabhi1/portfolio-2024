interface ContactEmailTemplateProps {
  senderName: string;
  senderEmail: string;
  message: string;
}

export const ContactEmailTemplate = ({ senderEmail, senderName, message }: ContactEmailTemplateProps) => {
  return (
    <div>
      <div>Hello, Abhishek!</div>
      <p>
        You got a new Portfolio enquiry from{" "}
        <span style={{ color: "rgb(30, 41, 59)", textDecoration: "underline" }}>
          {senderName} ({senderEmail})
        </span>
        . You can reply to this email to send a response.
      </p>
      <p style={{ marginTop: "1.25rem", marginBottom: "1.25rem" }}>{message}</p>
      <div>Thanks&#44;</div>
      <div>Portfolio team</div>
    </div>
  );
};
