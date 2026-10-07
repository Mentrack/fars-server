# FARZ APP – FINANCIAL RISK SOLUTIONS

**The following are the observations regarding the Farz App:**

## 1. Login

The application allows a user to log in without re-entering their email address and password when the option **"Login without password on this device"** is selected during the initial login. Therefore, this functionality works as expected.

## 2. Client Management

This displays all client information. However, it does not allow the addition of a new client.

- **Observation:**
  - Existing client records are visible.
  - The system does not permit users to add a new client.

## 3. Role Management

During testing, a role was created and assigned to a staff member named **"Robert Green."** However, the system did not display the staff member's name or the assigned role on the Role Management page.

- **Observation:**
  - The assigned role was not reflected in the Role Management view after assignment.
  - This may indicate a role-assignment display issue.
- **Recommendation:**
  - Ensure that assigned roles are immediately reflected on the Role Management page.
  - Add confirmation feedback after role assignment to verify successful updates.

## 4. Staff Management

This displays all staff members and their assigned roles. It also allows the creation of new users with staff roles and provides visibility into role assignments.

- **Observation:**
  - During staff creation, there is no option to view the entered password, increasing the risk of password entry errors.
  - After attempting to create a staff user, the system displayed the prompt message: **"Failed to create account: User already exists."** The name used during the staff creation attempt was **"mary kay."**
- **Recommendation:**
  - Add a **show/hide password option** during staff creation.

## 5. Bank Management

This displays a list of all banks and allows the addition of new banks. The search functionality works as expected.

- **Observation:**
  - Banks are currently ordered by **date of creation** rather than **bank name in ascending order**.
  - During the test run, **Coronation Bank** was created along with a bank code.
  - The bank was successfully added, and the **edit bank** functionality works correctly.
- **Recommendation:**
  - For simplicity and better usability, the **bank name should take precedence over the bank code**, except in cases where the bank code has specific significance.
  - Consider sorting banks alphabetically by **bank name (A–Z)** to improve usability and quick identification.

## 6. Re-login Issue

During the course of testing, the application page reloaded unexpectedly and redirected back to the login page, requiring re-entry of the username and password again.

## 7. Saved Work

After logging back into the application, the previously added bank (**"Coronation"**) was still visible.

## 8. Bank Account

This displays client-related banking information, including **account name** and **account number**.

- **Observation:**
  - Multiple clients are displayed along with their account numbers and account codes.
  - For better organization and usability, each client should have a **dedicated folder or expandable view**:
    - When a client is selected, the associated banks should be displayed.
    - Selecting a bank should then display the corresponding **account number**.
    - Example flow: **Prince Henry → Union Bank / Fidelity Bank → Account Number**
  - The interface currently emphasizes **bank codes** rather than **bank names**, which may reduce clarity.
  - When attempting to create a new client from the Bank Account page, the system redirected to the Client Management page with the prompt: **"Client ID is required. Please create account from Client Management page."**
- **Recommendation:**
  - For simplicity and better user experience, **bank names should be displayed instead of bank codes**, except where the bank code has specific significance.

## 9. Re-login Issue

On the following day the application did not retain the user session. Instead of logging in automatically, the app prompted again for email and password credentials.

## 10. Rate Management

This page displays rate changes and essential documents for reconciliation, as well as allow document uploads.

- **Observation:**
  - The document upload feature failed to upload documents successfully during testing.
  - When **"Create Rate"** is selected, the text colour on the page appears off-white, making it difficult to read and causing eye strain. From a distance, it is not clear which option has been selected.
  - The currency field is limited to **NGN**; additional currencies such as **USD, EUR, and GBP** should be included.
  - There is no clear specification indicating whether the loan interest rate change applies to a **short-term loan** or a **term loan**.
  - The system does not provide fields for **rate change management fees** and other related fee charges.
  - **CAMF** is currently included under **Rate Details**, it should also exist as a standalone item as others. The management fee should also exist as a standalone.
  - The **Rate Details** do not carry all informations.
  - **Document Management** is where uploaded documents can be viewed as well as to edit. **Bank name** should be used rather than **bank code** which will improve traceability and identification.
  - The **Rate input field** only allows incrementing the value using the arrow controls. This makes rate entry inefficient; for example, increasing the rate to **25%** requires repeated clicks and takes a significant amount of time. The field should allow **manual numeric input** for faster and more accurate rate entry.
- **Recommendation:**
  - Improve text contrast for better visibility and accessibility.
  - Expand currency options to include major international currencies.
  - Introduce clear loan-type classification (short-term vs term loan) for rate changes.
  - Separate CAMF from Rate Details and include provisions for additional rate-related fees.

## 11. Re-login Issue

Again, during the course of testing, the application page reloaded unexpectedly and redirected back to the login page, requiring re-entry of the username and password again.

## 12. Analysis

This page is intended to support item selection and financial analysis.

- **Observation:**
  - The item selection list includes **CAMF** and **COT**, which appear to represent the same charge, leading to duplication.
  - **Debit interest** is omitted from the analysis items as well as **fees, cash collateral, and credit interest** are not available for selection.
  - When selecting an **account number**, the dropdown initially displays the available account numbers correctly. However, after selection, the field changes to a generic label such as **"1 selected"** or **"2 selected,"** which only indicates the number of accounts chosen rather than the **actual account number(s)**. This reduces clarity and makes it difficult to identify the selected account(s). The selection box should continue to display the **actual account number(s)** selected for better traceability and usability.
  - After completing all selections, the system did not allow the analysis to be executed, preventing completion of the intended financial analysis.

## 13. Classification Pattern

The debit Interest was classified as LNT which represents loan analysis rather than **INT**.

---

## Observations/Questions after presentation of the FARZ – APP

1. Extraction of all LC related items from the account statement for LC computation. After extraction, the app should have the capacity to extract LC numbers, Form M numbers, BA numbers, bids, USD rate, USD amount, Offshore charges, LC Comission, pre neg, post neg. These LC related should be reclassified.
2. Reversals and returned bids from LC related, their dates should not be changed for LC analysis purpose.
3. A question arose during the meeting, if the app has the "undo button"?
4. Creation of a recycle bin to retrieve deleted items.
5. There should be an opportunity to create a new class.
6. Does the app have the capacity to work offline if there is an internet connection issue?

---

## Overall Conclusion

Based on the observations and challenges encountered during testing, the Farz App presents several functional and user-experience limitations that may hinder effective adoption. **Re-login and session persistence issues** require users to repeatedly re-enter credentials, disrupting workflow continuity and creating inefficiencies. Role management challenges, including the inability to properly assign and display staff roles, reduce administrative efficiency and system reliability.

The heavy reliance on **bank codes instead of bank names** across modules increases complexity and reduces clarity, particularly for users who are more familiar with bank names. Combined with unclear selections, poor visual contrast, and inefficient input methods, such as the inability to manually enter rate values, these issues negatively affect overall usability.

Functional gaps such as the **inability to add new clients**, **document upload failures**, **limited rate configuration options**, **duplicated financial terms**, and **missing analysis components** further impact data accuracy and operational effectiveness. Critically, even after selecting all required parameters on the Analysis page, the system did not allow the analysis to be executed, preventing users from completing essential financial assessments.

In conclusion, while the Farz App has a promising structure, the identified issues highlight the need for improvements in **session management, role assignment, data clarity, user interface design, and analysis functionality**. Addressing these challenges is essential to ensure the system is **intuitive, reliable, and fully capable of supporting financial risk management operations**.
