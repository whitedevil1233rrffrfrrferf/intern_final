import fitz  # PyMuPDF
import re

def extract_candidate_details(pdf_path):
    candidate_name = "Not Found"
    candidate_email = "Not Found"

    try:
        with fitz.open(pdf_path) as doc:
            text = ""
            for page in doc:
                text += page.get_text("text")  # Extract text from PDF

        print("\n📄 Extracted Text:\n", text)  # ✅ Print extracted text for debugging

        # Extract email using regex
        email_match = re.search(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", text)
        if email_match:
            candidate_email = email_match.group(0)

        # Extract name (assume it's near the email)
        possible_names = re.findall(r"([A-Z][a-z]+(?:\s[A-Z][a-z]+)*)", text)
        if possible_names:
            candidate_name = possible_names[0]  # Take the first matched name

    except Exception as e:
        print(f"❌ Error extracting text from PDF: {e}")

    print(f"\n✅ Extracted Name: {candidate_name}, Email: {candidate_email}")  # ✅ Print for debugging
    return candidate_name, candidate_email

# 🔍 Test with a sample PDF (Change the file path)
pdf_path = "uploads/sample_resume.pdf"
extract_candidate_details(pdf_path)
