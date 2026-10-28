/**
 * AIRO ONE™ Membership Interactive Application Logic
 * Replicating the React Next.js MembershipPage workflow:
 * - CurrentStep: 0 (Landing View), 1 (Personal Details), 2 (Plan Confirmation), 3 (Confirmation)
 * - Real-time Billing Cycle Sync (Quarterly vs Annual)
 * - At-A-Glance 4-Card Overview
 * - Comprehensive In-Store Enrollment Stepper Flow
 * - Active Membership Digital Card Lookup Modal
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. DATA CONFIGURATION & PLANS
  // --------------------------------------------------------------------------
  const MEMBERSHIP_PLANS = {
    select: {
      name: 'AIRO ONE Select',
      shortName: 'Select',
      quarterlyPrice: '₹590',
      quarterlyFull: '₹590 / quarter (INCL. 18% GST)',
      quarterlyGst: 'INCL. 18% GST',
      annualPrice: '₹1,999',
      annualFull: '₹1,999 / year (+ GST)',
      annualGst: '+ GST applicable',
      members: 'Only 1 Member',
      desc: 'Only 1 Member Covered • 3 Consultations • 4 Praana Screenings'
    },
    preferred: {
      name: 'AIRO ONE Preferred',
      shortName: 'Preferred',
      quarterlyPrice: '₹1,180',
      quarterlyFull: '₹1,180 / quarter (INCL. 18% GST)',
      quarterlyGst: 'INCL. 18% GST',
      annualPrice: '₹3,999',
      annualFull: '₹3,999 / year (+ GST)',
      annualGst: '+ GST applicable',
      members: 'You + 1 (2 Members)',
      desc: 'You + 1 Member • 1 Member Free Medication (350+ Meds)'
    },
    signature: {
      name: 'AIRO ONE Signature',
      shortName: 'Signature',
      quarterlyPrice: '₹2,065',
      quarterlyFull: '₹2,065 / quarter (INCL. 18% GST)',
      quarterlyGst: 'INCL. 18% GST',
      annualPrice: '₹6,999',
      annualFull: '₹6,999 / year (+ GST)',
      annualGst: '+ GST applicable',
      members: 'You + 3 (4 Members)',
      desc: 'You + 3 Members • 2 Members Free Medication • Care365™ & Ambulance'
    },
    infinite: {
      name: 'AIRO ONE Infinite',
      shortName: 'Infinite',
      quarterlyPrice: '₹2,655',
      quarterlyFull: '₹2,655 / quarter (INCL. 18% GST)',
      quarterlyGst: 'INCL. 18% GST',
      annualPrice: '₹8,999',
      annualFull: '₹8,999 / year (+ GST)',
      annualGst: '+ GST applicable',
      members: 'You + 5 (6 Members)',
      desc: 'You + 5 Members • 4 Members Free Medication • Care365™ & Ambulance'
    }
  };

  // Demo lookup records for realistic verification
  const DEMO_MEMBERS = [
    {
      query: '9000172121',
      name: 'Aditya Sharma',
      memberId: 'AIRO-849201',
      plan: 'AIRO ONE Preferred',
      tier: 'preferred',
      status: 'Active',
      validTill: '31 Dec 2026',
      billing: 'Annual'
    },
    {
      query: '90000182121',
      name: 'Dr. Rajesh Varma',
      memberId: 'AIRO-552190',
      plan: 'AIRO ONE Signature',
      tier: 'signature',
      status: 'Active',
      validTill: '15 Oct 2026',
      billing: 'Quarterly'
    },
    {
      query: 'AIRO-849201',
      name: 'Sunita Rao',
      memberId: 'AIRO-849201',
      plan: 'AIRO ONE Infinite',
      tier: 'infinite',
      status: 'Active',
      validTill: '28 Feb 2027',
      billing: 'Annual'
    }
  ];

  // State
  let currentStep = 0; // 0 = Landing, 1 = Personal Details, 2 = Plan Confirmation, 3 = Confirmation
  let currentBillingCycle = 'quarterly'; // 'quarterly' or 'annual'
  let selectedPlanKey = 'preferred';

  // Customer Form Data
  const formData = {
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    dob: '1992-05-18',
    gender: 'Male',
    address: '',
    emergencyContact: ''
  };

  // DOM Elements
  const landingView = document.getElementById('membershipLandingView');
  const stepperSection = document.getElementById('membershipStepperSection');
  const stepperStep1 = document.getElementById('stepperStep1');
  const stepperStep2 = document.getElementById('stepperStep2');
  const stepperStep3 = document.getElementById('stepperStep3');
  const stepperErrorAlert = document.getElementById('stepperErrorAlert');
  const stepperProgressFill = document.getElementById('stepperProgressFill');

  // Stepper Nodes
  const stepperNode1 = document.getElementById('stepperNode1');
  const stepperNode2 = document.getElementById('stepperNode2');
  const stepperNode3 = document.getElementById('stepperNode3');

  // --------------------------------------------------------------------------
  // 2. STEPPER NAVIGATION & VIEW SWITCHING
  // --------------------------------------------------------------------------
  function setStep(step) {
    currentStep = step;

    if (step === 0) {
      if (landingView) landingView.style.display = 'block';
      if (stepperSection) stepperSection.style.display = 'none';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Step 1, 2, or 3
    if (landingView) landingView.style.display = 'none';
    if (stepperSection) stepperSection.style.display = 'block';

    if (stepperStep1) stepperStep1.style.display = step === 1 ? 'block' : 'none';
    if (stepperStep2) stepperStep2.style.display = step === 2 ? 'block' : 'none';
    if (stepperStep3) stepperStep3.style.display = step === 3 ? 'block' : 'none';

    // Update Progress Line Fill
    if (stepperProgressFill) {
      if (step === 1) stepperProgressFill.style.width = '0%';
      else if (step === 2) stepperProgressFill.style.width = '50%';
      else if (step === 3) stepperProgressFill.style.width = '100%';
    }

    // Update Node Classes
    [
      { node: stepperNode1, stepNum: 1 },
      { node: stepperNode2, stepNum: 2 },
      { node: stepperNode3, stepNum: 3 }
    ].forEach(({ node, stepNum }) => {
      if (!node) return;
      if (stepNum <= step) {
        node.classList.add('active');
      } else {
        node.classList.remove('active');
      }
    });

    if (stepperErrorAlert) stepperErrorAlert.style.display = 'none';

    // Smooth scroll to top of stepper
    stepperSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function startRegistration(planKey, cycle) {
    if (planKey) selectedPlanKey = planKey;
    if (cycle) currentBillingCycle = cycle;

    // Synchronize Step 2 Plan UI
    updateStep2PlanCards();
    updateStep2BillingCycleUI();
    setStep(1);
  }

  // --------------------------------------------------------------------------
  // 3. BILLING CYCLE TOGGLE (QUARTERLY VS ANNUAL)
  // --------------------------------------------------------------------------
  const toggleQuarterlyBtn = document.getElementById('billingToggleQuarterly');
  const toggleAnnualBtn = document.getElementById('billingToggleAnnual');

  function setBillingCycle(cycle) {
    currentBillingCycle = cycle;

    // Toggle Button Styles in Landing
    if (toggleQuarterlyBtn && toggleAnnualBtn) {
      if (cycle === 'quarterly') {
        toggleQuarterlyBtn.classList.add('active');
        toggleAnnualBtn.classList.remove('active');
      } else {
        toggleAnnualBtn.classList.add('active');
        toggleQuarterlyBtn.classList.remove('active');
      }
    }

    // Update At-A-Glance 4 Cards Grid
    Object.keys(MEMBERSHIP_PLANS).forEach(key => {
      const plan = MEMBERSHIP_PLANS[key];
      const gPrice = document.getElementById(`glancePrice-${key}`);
      const gCycle = document.getElementById(`glanceCycle-${key}`);
      const gGst = document.getElementById(`glanceGst-${key}`);
      const gAlt = document.getElementById(`glanceAlt-${key}`);

      if (gPrice && gCycle && gGst && gAlt) {
        if (cycle === 'quarterly') {
          gPrice.textContent = plan.quarterlyPrice;
          gCycle.textContent = '/ qtr';
          gGst.textContent = 'INCL. 18% GST';
          gAlt.textContent = `or ${plan.annualPrice}/yr (+ GST)`;
        } else {
          gPrice.textContent = plan.annualPrice;
          gCycle.textContent = '/ yr';
          gGst.textContent = '+ GST APPLICABLE';
          gAlt.textContent = `or ${plan.quarterlyPrice}/qtr (incl. GST)`;
        }
      }

      // Update Tier Cards in Membership Plans Grid
      const priceMainEl = document.getElementById(`priceMain-${key}`);
      const priceCycleEl = document.getElementById(`priceCycle-${key}`);
      const gstTagEl = document.getElementById(`gstTag-${key}`);
      const altPriceEl = document.getElementById(`altPrice-${key}`);
      const primaryJoinBtn = document.getElementById(`joinBtn-${key}`);

      if (priceMainEl && priceCycleEl && gstTagEl && altPriceEl) {
        if (cycle === 'quarterly') {
          priceMainEl.textContent = plan.quarterlyPrice;
          priceCycleEl.textContent = '/ quarter';
          gstTagEl.textContent = '★ INCL. 18% GST';
          altPriceEl.textContent = `or ${plan.annualPrice} / year (+ GST)`;
          if (primaryJoinBtn) primaryJoinBtn.textContent = `Join ${plan.shortName} (${plan.quarterlyPrice}/qtr)`;
        } else {
          priceMainEl.textContent = plan.annualPrice;
          priceCycleEl.textContent = '/ year';
          gstTagEl.textContent = '+ GST applicable';
          altPriceEl.textContent = `or ${plan.quarterlyPrice} / quarter (Incl. GST)`;
          if (primaryJoinBtn) primaryJoinBtn.textContent = `Join Annual (${plan.annualPrice}/yr)`;
        }
      }
    });

    // Also update Step 2 UI
    updateStep2PlanCards();
    updateStep2BillingCycleUI();
    updateStep2Overview();
  }

  if (toggleQuarterlyBtn) {
    toggleQuarterlyBtn.addEventListener('click', () => setBillingCycle('quarterly'));
  }
  if (toggleAnnualBtn) {
    toggleAnnualBtn.addEventListener('click', () => setBillingCycle('annual'));
  }

  // --------------------------------------------------------------------------
  // 4. AT-A-GLANCE & HERO JOIN TRIGGERS
  // --------------------------------------------------------------------------
  const heroViewPlansJoinBtn = document.getElementById('heroViewPlansJoinBtn');
  if (heroViewPlansJoinBtn) {
    heroViewPlansJoinBtn.addEventListener('click', () => {
      startRegistration('preferred', currentBillingCycle);
    });
  }

  // At-A-Glance Cards Click Handlers
  document.querySelectorAll('.glance-card-clickable').forEach(card => {
    card.addEventListener('click', () => {
      const planKey = card.getAttribute('data-plan') || 'preferred';
      startRegistration(planKey, currentBillingCycle);
    });
  });

  // Table & Tier Card Join Buttons
  document.querySelectorAll('.btn-enroll-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const planKey = btn.getAttribute('data-plan') || 'preferred';
      const cycle = btn.getAttribute('data-cycle') || currentBillingCycle;
      startRegistration(planKey, cycle);
    });
  });

  // --------------------------------------------------------------------------
  // 5. STEP 1: PERSONAL DETAILS FORM
  // --------------------------------------------------------------------------
  const backToPlansOverviewBtn = document.getElementById('backToPlansOverviewBtn');
  const cancelStep1Btn = document.getElementById('cancelStep1Btn');
  const proceedToStep2Btn = document.getElementById('proceedToStep2Btn');

  if (backToPlansOverviewBtn) {
    backToPlansOverviewBtn.addEventListener('click', () => setStep(0));
  }
  if (cancelStep1Btn) {
    cancelStep1Btn.addEventListener('click', () => setStep(0));
  }

  function validateStep1() {
    const fn = document.getElementById('step1FirstName').value.trim();
    const ln = document.getElementById('step1LastName').value.trim();
    const mob = document.getElementById('step1Mobile').value.trim();
    const em = document.getElementById('step1Email').value.trim();
    const dob = document.getElementById('step1Dob').value;
    const addr = document.getElementById('step1Address').value.trim();

    if (!fn) return 'Please enter your First Name';
    if (!ln) return 'Please enter your Last Name';
    if (!mob || mob.replace(/\D/g, '').length < 10) return 'Please enter a valid 10-digit Mobile Number';
    if (!em || !em.includes('@') || !em.includes('.')) return 'Please enter a valid Email Address';
    if (!dob) return 'Please select your Date of Birth';
    if (!addr) return 'Please enter your Full Address';

    formData.firstName = fn;
    formData.lastName = ln;
    formData.mobile = mob;
    formData.email = em;
    formData.dob = dob;
    formData.gender = document.getElementById('step1Gender').value;
    formData.address = addr;
    formData.emergencyContact = document.getElementById('step1Emergency').value.trim();

    return null;
  }

  if (proceedToStep2Btn) {
    proceedToStep2Btn.addEventListener('click', () => {
      const error = validateStep1();
      if (error) {
        if (stepperErrorAlert) {
          stepperErrorAlert.textContent = error;
          stepperErrorAlert.style.display = 'block';
          stepperErrorAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      if (stepperErrorAlert) stepperErrorAlert.style.display = 'none';

      // Update Step 2 Overview and show Step 2
      updateStep2Overview();
      setStep(2);
    });
  }

  // --------------------------------------------------------------------------
  // 6. STEP 2: PLAN CONFIRMATION & BILLING CYCLE
  // --------------------------------------------------------------------------
  const step2ToggleQuarterly = document.getElementById('step2ToggleQuarterly');
  const step2ToggleAnnual = document.getElementById('step2ToggleAnnual');
  const backToStep1Btn = document.getElementById('backToStep1Btn');
  const submitApplicationBtn = document.getElementById('submitApplicationBtn');

  if (step2ToggleQuarterly) {
    step2ToggleQuarterly.addEventListener('click', () => {
      currentBillingCycle = 'quarterly';
      setBillingCycle('quarterly');
    });
  }
  if (step2ToggleAnnual) {
    step2ToggleAnnual.addEventListener('click', () => {
      currentBillingCycle = 'annual';
      setBillingCycle('annual');
    });
  }

  function updateStep2BillingCycleUI() {
    if (step2ToggleQuarterly && step2ToggleAnnual) {
      if (currentBillingCycle === 'quarterly') {
        step2ToggleQuarterly.classList.add('active');
        step2ToggleAnnual.classList.remove('active');
      } else {
        step2ToggleAnnual.classList.add('active');
        step2ToggleQuarterly.classList.remove('active');
      }
    }
  }

  function updateStep2PlanCards() {
    document.querySelectorAll('.step2-plan-card').forEach(card => {
      const tier = card.getAttribute('data-tier');
      const plan = MEMBERSHIP_PLANS[tier];
      if (!plan) return;

      if (tier === selectedPlanKey) {
        card.classList.add('selected');
      } else {
        card.classList.remove('selected');
      }

      // Update card price
      const priceEl = document.getElementById(`step2Price-${tier}`);
      const gstEl = document.getElementById(`step2Gst-${tier}`);
      const altEl = document.getElementById(`step2Alt-${tier}`);

      if (priceEl && gstEl && altEl) {
        if (currentBillingCycle === 'quarterly') {
          priceEl.innerHTML = `${plan.quarterlyPrice} <span style="font-size: 12px; font-weight: 600; color: #64748b;">/ qtr</span>`;
          gstEl.textContent = '✓ INCL. 18% GST';
          altEl.textContent = `or ${plan.annualPrice}/yr (+ GST)`;
        } else {
          priceEl.innerHTML = `${plan.annualPrice} <span style="font-size: 12px; font-weight: 600; color: #64748b;">/ yr</span>`;
          gstEl.textContent = '+ GST APPLICABLE';
          altEl.textContent = `or ${plan.quarterlyPrice}/qtr (incl. GST)`;
        }
      }
    });
  }

  // Step 2 Plan card click event
  document.querySelectorAll('.step2-plan-card').forEach(card => {
    card.addEventListener('click', () => {
      const tier = card.getAttribute('data-tier');
      if (tier) {
        selectedPlanKey = tier;
        updateStep2PlanCards();
        updateStep2Overview();
      }
    });
  });

  function updateStep2Overview() {
    const plan = MEMBERSHIP_PLANS[selectedPlanKey];
    if (!plan) return;

    const nameEl = document.getElementById('summaryApplicantName');
    const mobEl = document.getElementById('summaryApplicantMobile');
    const emEl = document.getElementById('summaryApplicantEmail');
    const planEl = document.getElementById('summarySelectedPlan');
    const cycleEl = document.getElementById('summaryBillingCycle');
    const feeEl = document.getElementById('summaryMembershipFee');

    if (nameEl) nameEl.textContent = `${formData.firstName} ${formData.lastName}`.trim() || 'Valued Applicant';
    if (mobEl) mobEl.textContent = formData.mobile || '—';
    if (emEl) emEl.textContent = formData.email || '—';
    if (planEl) planEl.textContent = plan.name;
    if (cycleEl) {
      cycleEl.textContent = currentBillingCycle === 'quarterly'
        ? 'Quarterly (Every 3 Months)'
        : 'Annual (1 Year)';
    }
    if (feeEl) {
      feeEl.textContent = currentBillingCycle === 'quarterly'
        ? `${plan.quarterlyPrice} / quarter (INCL. 18% GST)`
        : `${plan.annualPrice} / year (+ GST applicable)`;
    }
  }

  if (backToStep1Btn) {
    backToStep1Btn.addEventListener('click', () => setStep(1));
  }

  if (submitApplicationBtn) {
    submitApplicationBtn.addEventListener('click', () => {
      const origText = submitApplicationBtn.innerHTML;
      submitApplicationBtn.disabled = true;
      submitApplicationBtn.innerHTML = '<span style="display:inline-block; width:16px; height:16px; border:2px solid #fff; border-top-color:transparent; border-radius:50%; animation: spin 0.8s linear infinite; vertical-align:middle; margin-right:8px;"></span> Submitting Application...';

      setTimeout(() => {
        submitApplicationBtn.disabled = false;
        submitApplicationBtn.innerHTML = origText;

        // Generate Registration ID (e.g. REG-AIRO-78192)
        const randId = Math.floor(10000 + Math.random() * 90000);
        const regId = `REG-AIRO-${randId}`;

        const plan = MEMBERSHIP_PLANS[selectedPlanKey];
        const applicantFullName = `${formData.firstName} ${formData.lastName}`.trim();

        // Update Step 3
        const regIdEl = document.getElementById('successRegId');
        const applicantEl = document.getElementById('successApplicantName');
        const planNameEl = document.getElementById('successPlanName');
        const billingCycleEl = document.getElementById('successBillingCycle');
        const instructRegEl = document.getElementById('instructRegId');

        if (regIdEl) regIdEl.textContent = regId;
        if (applicantEl) applicantEl.textContent = applicantFullName;
        if (planNameEl) planNameEl.textContent = plan.name;
        if (billingCycleEl) {
          billingCycleEl.textContent = currentBillingCycle === 'quarterly'
            ? 'Quarterly (Every 3 Months)'
            : 'Annual (1 Year)';
        }
        if (instructRegEl) instructRegEl.textContent = regId;

        setStep(3);
      }, 600);
    });
  }

  // --------------------------------------------------------------------------
  // 7. STEP 3: SUBMISSION CONFIRMATION
  // --------------------------------------------------------------------------
  const returnToOverviewBtn = document.getElementById('returnToOverviewBtn');
  if (returnToOverviewBtn) {
    returnToOverviewBtn.addEventListener('click', () => {
      // Clear form data
      document.getElementById('step1FirstName').value = '';
      document.getElementById('step1LastName').value = '';
      document.getElementById('step1Mobile').value = '';
      document.getElementById('step1Email').value = '';
      document.getElementById('step1Address').value = '';
      document.getElementById('step1Emergency').value = '';

      setStep(0);
    });
  }

  // --------------------------------------------------------------------------
  // 8. LOOKUP ACTIVE MEMBERSHIP MODAL
  // --------------------------------------------------------------------------
  const lookupModal = document.getElementById('lookupModal');
  const openLookupBtns = document.querySelectorAll('.trigger-lookup-modal');
  const closeLookupBtn = document.getElementById('closeLookupModalBtn');
  const lookupForm = document.getElementById('lookupForm');
  const lookupInput = document.getElementById('lookupQueryInput');
  const lookupErrorBox = document.getElementById('lookupErrorBox');
  const lookupLoading = document.getElementById('lookupLoading');
  const lookupResultView = document.getElementById('lookupResultView');
  const lookupFormView = document.getElementById('lookupFormView');
  const demoChipBtns = document.querySelectorAll('.demo-lookup-chip');

  function openLookupDialog() {
    if (!lookupModal) return;
    lookupModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (lookupErrorBox) lookupErrorBox.style.display = 'none';
    if (lookupFormView) lookupFormView.style.display = 'block';
    if (lookupResultView) lookupResultView.style.display = 'none';
    if (lookupInput) lookupInput.focus();
  }

  function closeLookupDialog() {
    if (!lookupModal) return;
    lookupModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openLookupBtns.forEach(btn => {
    btn.addEventListener('click', openLookupDialog);
  });

  if (closeLookupBtn) {
    closeLookupBtn.addEventListener('click', closeLookupDialog);
  }

  if (lookupModal) {
    lookupModal.addEventListener('click', (e) => {
      if (e.target === lookupModal) closeLookupDialog();
    });
  }

  // Preset demo chips
  demoChipBtns.forEach(chip => {
    chip.addEventListener('click', () => {
      const val = chip.getAttribute('data-value');
      if (lookupInput) {
        lookupInput.value = val;
        performLookup(val);
      }
    });
  });

  if (lookupForm) {
    lookupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = lookupInput.value.trim();
      if (!query) {
        showLookupError('Please enter your Mobile Number, Email, or Member ID');
        return;
      }
      performLookup(query);
    });
  }

  function showLookupError(msg) {
    if (lookupErrorBox) {
      lookupErrorBox.textContent = msg;
      lookupErrorBox.style.display = 'block';
    }
  }

  function performLookup(query) {
    if (lookupErrorBox) lookupErrorBox.style.display = 'none';
    if (lookupLoading) lookupLoading.style.display = 'flex';

    setTimeout(() => {
      if (lookupLoading) lookupLoading.style.display = 'none';
      const clean = query.toLowerCase().replace(/[^a-z0-9]/g, '');

      let found = DEMO_MEMBERS.find(m => {
        return m.query.toLowerCase().replace(/[^a-z0-9]/g, '').includes(clean) ||
               clean.includes(m.query.toLowerCase().replace(/[^a-z0-9]/g, ''));
      });

      if (!found && clean.length >= 4) {
        found = {
          name: 'Verified AIRO Member',
          memberId: `AIRO-${Math.floor(100000 + Math.random() * 900000)}`,
          plan: 'AIRO ONE Preferred',
          tier: 'preferred',
          status: 'Active',
          validTill: '31 Dec 2026',
          billing: 'Annual'
        };
      }

      if (found) {
        renderDigitalCardResult(found);
      } else {
        showLookupError('No membership found matching your details. Please check your Mobile Number, Email, or Member ID.');
      }
    }, 500);
  }

  function renderDigitalCardResult(member) {
    if (lookupFormView) lookupFormView.style.display = 'none';
    if (lookupResultView) lookupResultView.style.display = 'block';

    const nameEl = document.getElementById('cardMemberName');
    const planEl = document.getElementById('cardMemberPlan');
    const idEl = document.getElementById('cardMemberId');
    const expEl = document.getElementById('cardMemberExpiry');
    const sumTier = document.getElementById('statusSummaryTier');
    const sumCycle = document.getElementById('statusSummaryCycle');

    if (nameEl) nameEl.textContent = member.name;
    if (planEl) planEl.textContent = member.plan;
    if (idEl) idEl.textContent = member.memberId;
    if (expEl) expEl.textContent = `Valid Thru: ${member.validTill}`;
    if (sumTier) sumTier.textContent = member.plan;
    if (sumCycle) sumCycle.textContent = `${member.billing} Membership`;
  }

  const lookupSearchAgainBtn = document.getElementById('lookupSearchAgainBtn');
  if (lookupSearchAgainBtn) {
    lookupSearchAgainBtn.addEventListener('click', () => {
      if (lookupFormView) lookupFormView.style.display = 'block';
      if (lookupResultView) lookupResultView.style.display = 'none';
      if (lookupInput) {
        lookupInput.value = '';
        lookupInput.focus();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 10. MOBILE NAVIGATION DRAWER & SEARCH
  // --------------------------------------------------------------------------
  const mobileMenuToggleBtn = document.getElementById('mobileMenuToggleBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
  const closeMobileNavBtn = document.getElementById('closeMobileNavBtn');
  const mobileSearchTrigger = document.getElementById('mobileSearchTrigger');

  const openMobileNav = () => {
    if (mobileNavDrawer && mobileNavBackdrop) {
      mobileNavDrawer.classList.add('is-open');
      mobileNavDrawer.setAttribute('aria-hidden', 'false');
      mobileNavBackdrop.classList.add('is-open');
      mobileNavBackdrop.setAttribute('aria-hidden', 'false');
      if (mobileMenuToggleBtn) {
        mobileMenuToggleBtn.classList.add('is-active');
        mobileMenuToggleBtn.setAttribute('aria-expanded', 'true');
      }
      document.body.style.overflow = 'hidden';
    }
  };

  const closeMobileNav = () => {
    if (mobileNavDrawer && mobileNavBackdrop) {
      mobileNavDrawer.classList.remove('is-open');
      mobileNavDrawer.setAttribute('aria-hidden', 'true');
      mobileNavBackdrop.classList.remove('is-open');
      mobileNavBackdrop.setAttribute('aria-hidden', 'true');
      if (mobileMenuToggleBtn) {
        mobileMenuToggleBtn.classList.remove('is-active');
        mobileMenuToggleBtn.setAttribute('aria-expanded', 'false');
      }
      document.body.style.overflow = '';
    }
  };

  if (mobileMenuToggleBtn) {
    mobileMenuToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileNavDrawer && mobileNavDrawer.classList.contains('is-open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (closeMobileNavBtn) {
    closeMobileNavBtn.addEventListener('click', closeMobileNav);
  }

  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', closeMobileNav);
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  if (mobileSearchTrigger) {
    mobileSearchTrigger.addEventListener('click', () => {
      window.location.href = 'index.html#catalogSearch';
    });
  }

  // --------------------------------------------------------------------------
  // 9. INITIALIZE DEFAULT STATE
  // --------------------------------------------------------------------------
  setBillingCycle('quarterly');
  setStep(0);
});
