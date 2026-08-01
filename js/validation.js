/* ===== LifeLink Validation Module ===== */

function validate10DigitPhone(phoneStr) {
  if (!phoneStr) return false;
  const cleanPhone = phoneStr.replace(/\D/g, '');
  return cleanPhone.length === 10;
}

function getCleanPhoneNumber(phoneStr) {
  if (!phoneStr) return '';
  return phoneStr.replace(/\D/g, '');
}

function isDuplicateDonorRecord(existingDonors, email, phone) {
  const cleanPhone = getCleanPhoneNumber(phone);
  const cleanEmail = email ? email.trim().toLowerCase() : '';

  return existingDonors.some(d =>
    (cleanPhone && d.phone && getCleanPhoneNumber(d.phone) === cleanPhone) ||
    (cleanEmail && d.email && d.email.trim().toLowerCase() === cleanEmail)
  );
}
