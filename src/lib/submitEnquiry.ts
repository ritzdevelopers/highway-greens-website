export const ENQUIRY_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxJ8IxPoNnzlewmbzjwOHVZA1KNDxq6Jx-G1n19NUzuocfz9vCq7Jv12_RcPdVYIHsq/exec";

export type EnquiryPayload = {
  formType: string;
  fullName: string;
  email: string;
  mobile: string;
  interestedIn: string;
  message: string;
  source?: string;
};

export async function submitEnquiry(payload: EnquiryPayload) {
  const formBody = new URLSearchParams();

  formBody.append("formType", payload.formType);
  formBody.append("fullName", payload.fullName);
  formBody.append("email", payload.email);
  formBody.append("mobile", payload.mobile);
  formBody.append("interestedIn", payload.interestedIn);
  formBody.append("message", payload.message);
  formBody.append("source", payload.source || payload.formType);

  await fetch(ENQUIRY_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody,
  });
}
