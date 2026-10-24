import { useState, type ReactNode } from "react";

type IconName =
  | "home"
  | "calendar"
  | "flask"
  | "message"
  | "file"
  | "user"
  | "help"
  | "bell"
  | "chevron"
  | "arrow"
  | "check"
  | "clock"
  | "close"
  | "shield"
  | "send"
  | "video"
  | "link";

const iconPaths: Record<IconName, ReactNode> = {
  home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9" /><path d="M9 20v-6h6v6" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
  flask: <><path d="M9 3h6M10 3v6l-5.5 9.3A1.8 1.8 0 0 0 6 21h12a1.8 1.8 0 0 0 1.5-2.7L14 9V3" /><path d="M7.5 16h9" /></>,
  message: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" /><path d="M8 9h8M8 13h5" /></>,
  file: <><path d="M6 2h8l4 4v16H6Z" /><path d="M14 2v5h5M9 12h6M9 16h6" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 22a8 8 0 0 1 16 0" /></>,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.8 9a2.4 2.4 0 1 1 3.4 2.2c-1 .5-1.2 1.1-1.2 2.1M12 17h.01" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
  chevron: <path d="m9 6 6 6-6 6" />,
  arrow: <path d="m5 12 14 0m-5-5 5 5-5 5" />,
  check: <path d="m5 12 4 4L19 6" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  shield: <><path d="M12 2 4.5 5v6c0 5.1 3.2 9.2 7.5 11 4.3-1.8 7.5-5.9 7.5-11V5Z" /><path d="m9 12 2 2 4-4" /></>,
  send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
  video: <><rect x="3" y="6" width="13" height="12" rx="2" /><path d="m16 10 5-3v10l-5-3" /></>,
  link: <><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2" /><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2" /></>,
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconPaths[name]}
    </svg>
  );
}

const navItems: { label: string; icon: IconName }[] = [
  { label: "Overview", icon: "home" },
  { label: "Appointments", icon: "calendar" },
  { label: "Lab results", icon: "flask" },
  { label: "Messages", icon: "message" },
  { label: "Health records", icon: "file" },
];

const scheduleDates = [
  { day: "Mon", date: "16" },
  { day: "Tue", date: "17" },
  { day: "Wed", date: "18" },
  { day: "Thu", date: "19" },
  { day: "Fri", date: "20" },
];

const scheduleTimes = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];

function PortalPage({
  page,
  onLab,
  onVisit,
  onMessage,
  onSchedule,
}: {
  page: string;
  onLab: () => void;
  onVisit: () => void;
  onMessage: () => void;
  onSchedule: () => void;
}) {
  if (page === "Appointments") {
    return (
      <section className="portal-page">
        <div className="page-heading"><div><p className="eyebrow">MY CARE</p><h1>Appointments</h1><p>Manage upcoming visits and review your appointment history.</p></div><button className="primary-button" onClick={onSchedule}><Icon name="calendar" size={17} /> Schedule appointment</button></div>
        <div className="page-tabs"><button className="selected" disabled>Upcoming</button><button disabled>Past visits</button></div>
        <article className="page-empty">
          <span className="page-empty-icon"><Icon name="calendar" size={28} /></span>
          <h2>No upcoming appointments</h2>
          <p>When you book a visit, you’ll find the date, details, and preparation steps here.</p>
          <button className="primary-button" onClick={onSchedule}>Schedule an appointment</button>
        </article>
        <div className="page-section-heading"><div><h2>Recent visits</h2><p>Review summaries and next steps from your care team.</p></div></div>
        <article className="list-card">
          <div className="list-date"><span>JUN</span><strong>04</strong></div>
          <div className="list-copy"><span className="pill neutral">COMPLETED</span><h3>Annual wellness visit</h3><p>Dr. Elena Chen · Primary Care · 10:00 AM</p></div>
          <button className="secondary-button" onClick={onVisit}>View summary <Icon name="chevron" size={15} /></button>
        </article>
      </section>
    );
  }

  if (page === "Lab results") {
    return (
      <section className="portal-page">
        <div className="page-heading"><div><p className="eyebrow">MY HEALTH</p><h1>Lab results</h1><p>Track active tests and understand your results with context from your care team.</p></div></div>
        <div className="page-tabs"><button className="selected" disabled>All results</button><button onClick={onLab}>In progress <span>1</span></button><button disabled>Completed</button></div>
        <article className="list-card featured-list">
          <div className="list-icon blue"><Icon name="flask" size={23} /></div>
          <div className="list-copy"><span className="pill blue">TESTING IN PROGRESS</span><h3>Comprehensive Metabolic Panel</h3><p>Collected June 6 · Results expected tomorrow by 2:00 PM</p><div className="mini-progress"><span></span></div></div>
          <button className="primary-button" onClick={onLab}>Track status</button>
        </article>
        <div className="page-section-heading"><div><h2>Previous results</h2><p>Your doctor’s explanation is included with each result.</p></div></div>
        <article className="list-card">
          <div className="list-icon green"><Icon name="file" size={22} /></div>
          <div className="list-copy"><span className="pill neutral">MAY 12</span><h3>Lipid panel</h3><p>All results reviewed · Includes notes from Dr. Chen</p></div>
          <button className="secondary-button" disabled>View results <Icon name="chevron" size={15} /></button>
        </article>
        <article className="list-card">
          <div className="list-icon green"><Icon name="file" size={22} /></div>
          <div className="list-copy"><span className="pill neutral">FEB 08</span><h3>Complete blood count</h3><p>All results in normal range</p></div>
          <button className="secondary-button" disabled>View results <Icon name="chevron" size={15} /></button>
        </article>
      </section>
    );
  }

  if (page === "Messages") {
    return (
      <section className="portal-page">
        <div className="page-heading"><div><p className="eyebrow">CARE TEAM</p><h1>Messages</h1><p>Ask questions and stay connected with your care team.</p></div><button className="primary-button" onClick={onMessage}><Icon name="message" size={17} /> New message</button></div>
        <div className="messages-layout">
          <div className="conversation-list">
            <div className="conversation selected"><span className="doctor-avatar">EC</span><div><strong>Dr. Elena Chen</strong><p>Your follow-up plan is ready...</p><small>Today · 9:24 AM</small></div><i></i></div>
            <div className="conversation"><span className="team-avatar"><Icon name="flask" size={18} /></span><div><strong>Westside Labs</strong><p>Your sample is being processed.</p><small>Yesterday</small></div></div>
            <div className="conversation"><span className="team-avatar"><Icon name="calendar" size={18} /></span><div><strong>Scheduling team</strong><p>Your annual visit summary...</p><small>June 4</small></div></div>
          </div>
          <div className="message-preview">
            <div className="message-person"><span className="doctor-avatar">EC</span><div><strong>Dr. Elena Chen</strong><small>Primary care physician · Usually replies in 1 day</small></div></div>
            <div className="preview-bubble"><small>DR. CHEN · TODAY AT 9:24 AM</small><p>Hi Sophia, your blood pressure is moving in the right direction. Please send me an update after two weeks on Lisinopril, especially if you notice dizziness or a persistent cough.</p></div>
            <button className="secondary-button" onClick={onMessage}>Reply to care team <Icon name="arrow" size={15} /></button>
          </div>
        </div>
      </section>
    );
  }

  if (page === "Health records") {
    return (
      <section className="portal-page">
        <div className="page-heading"><div><p className="eyebrow">MY HEALTH</p><h1>Health records</h1><p>Your visits, medications, conditions, and documents in one secure place.</p></div><button className="secondary-button" disabled><Icon name="file" size={17} /> Download records</button></div>
        <div className="record-grid">
          <button disabled><span className="list-icon lavender"><Icon name="file" size={22} /></span><div><strong>Visit summaries</strong><small>4 records</small></div><Icon name="chevron" size={17} /></button>
          <button disabled><span className="list-icon green"><Icon name="shield" size={22} /></span><div><strong>Medications</strong><small>2 active</small></div><Icon name="chevron" size={17} /></button>
          <button disabled><span className="list-icon blue"><Icon name="flask" size={22} /></span><div><strong>Test results</strong><small>8 records</small></div><Icon name="chevron" size={17} /></button>
        </div>
        <div className="page-section-heading"><div><h2>Recent records</h2><p>New and recently updated health information.</p></div></div>
        <article className="list-card">
          <div className="list-date"><span>JUN</span><strong>04</strong></div>
          <div className="list-copy"><span className="pill neutral">VISIT SUMMARY</span><h3>Annual wellness visit</h3><p>Dr. Elena Chen · Includes plain-language notes and next steps</p></div>
          <button className="secondary-button" onClick={onVisit}>Open record <Icon name="chevron" size={15} /></button>
        </article>
        <article className="list-card">
          <div className="list-icon lavender"><Icon name="file" size={22} /></div>
          <div className="list-copy"><span className="pill neutral">MEDICATION</span><h3>Lisinopril, 10 mg</h3><p>Active · Started June 4 · Take once daily</p></div>
          <button className="secondary-button" disabled>View details <Icon name="chevron" size={15} /></button>
        </article>
      </section>
    );
  }

  if (page === "Help & support") {
    return (
      <section className="portal-page">
        <div className="page-heading"><div><p className="eyebrow">SUPPORT</p><h1>How can we help?</h1><p>Find answers or connect with the right support team.</p></div></div>
        <div className="support-search"><Icon name="help" size={20} /><span>Search help topics</span></div>
        <div className="record-grid support-grid">
          <button disabled><span className="list-icon green"><Icon name="link" size={22} /></span><div><strong>Account & connections</strong><small>Manage your provider link</small></div><Icon name="chevron" size={17} /></button>
          <button onClick={onMessage}><span className="list-icon blue"><Icon name="message" size={22} /></span><div><strong>Contact your care team</strong><small>Questions about your health</small></div><Icon name="chevron" size={17} /></button>
          <button disabled><span className="list-icon lavender"><Icon name="help" size={22} /></span><div><strong>Technical support</strong><small>Help using CareFlex</small></div><Icon name="chevron" size={17} /></button>
        </div>
      </section>
    );
  }

  return (
    <section className="portal-page">
      <div className="page-heading"><div><p className="eyebrow">ACCOUNT</p><h1>Profile & settings</h1><p>Manage your personal details, connected providers, and preferences.</p></div></div>
      <article className="profile-panel">
        <div className="profile-hero"><span className="profile-large">SM</span><div><h2>Sophia Miller</h2><p>sophia.miller@example.com · Patient ID CF-284019</p></div><button className="secondary-button" disabled>Edit profile</button></div>
        <div className="settings-row"><span className="list-icon green"><Icon name="link" size={21} /></span><div><strong>Connected provider</strong><p>Westside Medical Group · Connected</p></div><button disabled>Manage</button></div>
        <div className="settings-row"><span className="list-icon blue"><Icon name="bell" size={21} /></span><div><strong>Notifications</strong><p>Lab updates, appointment reminders, and messages</p></div><button disabled>Manage</button></div>
        <div className="settings-row"><span className="list-icon lavender"><Icon name="shield" size={21} /></span><div><strong>Privacy & security</strong><p>Password, sign-in, and data sharing preferences</p></div><button disabled>Manage</button></div>
      </article>
    </section>
  );
}

export default function App() {
  const [activeNav, setActiveNav] = useState("Overview");
  const [flowStep, setFlowStep] = useState(0);
  const [detailView, setDetailView] = useState<"lab" | "visit" | null>(null);
  const [labUpdates, setLabUpdates] = useState(true);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [flowOrigin, setFlowOrigin] = useState<"followup" | "message" | "schedule">("followup");
  const [selectedDate, setSelectedDate] = useState("Wed 18");
  const [selectedTime, setSelectedTime] = useState("10:30 AM");
  const [message, setMessage] = useState(
    "Hi Dr. Chen, I've been taking the new medication as discussed. My symptoms have improved, but I've noticed some mild dizziness in the mornings. Is this expected?",
  );

  const openFollowUp = () => {
    setFlowOrigin("followup");
    setFlowStep(1);
  };
  const openMessage = () => {
    setFlowOrigin("message");
    setFlowStep(2);
  };
  const openSchedule = () => {
    setFlowOrigin("schedule");
    setFlowStep(3);
  };
  const closeFlow = () => setFlowStep(0);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark"><span></span><span></span></span>
          <span>CareFlex</span>
        </div>

        <nav className="nav-list" aria-label="Primary navigation">
          <p className="nav-label">My health</p>
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`nav-item ${activeNav === item.label ? "active" : ""}`}
              onClick={() => setActiveNav(item.label)}
            >
              <Icon name={item.icon} size={19} />
              <span>{item.label}</span>
              {item.label === "Messages" && <span className="nav-badge">2</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <button className={`nav-item ${activeNav === "Help & support" ? "active" : ""}`} onClick={() => setActiveNav("Help & support")}><Icon name="help" size={19} /><span>Help & support</span></button>
          <button className={`nav-item ${activeNav === "Profile & settings" ? "active" : ""}`} onClick={() => setActiveNav("Profile & settings")}><Icon name="user" size={19} /><span>Profile & settings</span></button>
          <div className="privacy-note"><Icon name="shield" size={17} /><span>Your health data is private and protected.</span></div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="provider-status">
            <span className="status-dot"></span>
            <span>Connected to <strong>Westside Medical Group</strong></span>
            <button disabled>Manage</button>
          </div>
          <div className="top-actions">
            <button className="icon-button" aria-label="Notifications" disabled>
              <Icon name="bell" size={20} />
              <span className="notification-dot"></span>
            </button>
            <span className="divider"></span>
            <div className="profile-menu-wrap">
              <button className="profile-button" onClick={() => setProfileMenuOpen(!profileMenuOpen)} aria-expanded={profileMenuOpen} aria-haspopup="menu">
                <span className="avatar">SM</span>
                <span className="profile-copy"><strong>Sophia Miller</strong><small>Patient</small></span>
                <span className={`profile-chevron ${profileMenuOpen ? "open" : ""}`}>⌄</span>
              </button>
              {profileMenuOpen && (
                <div className="profile-dropdown" role="menu">
                  <button role="menuitem" onClick={() => { setActiveNav("Profile & settings"); setProfileMenuOpen(false); }}><Icon name="user" size={17} /><span>Profile</span></button>
                  <button role="menuitem" disabled><Icon name="link" size={17} /><span>Connect another account</span></button>
                  <button role="menuitem" onClick={() => { setActiveNav("Profile & settings"); setProfileMenuOpen(false); }}><Icon name="shield" size={17} /><span>Settings</span></button>
                  <div className="dropdown-separator"></div>
                  <button className="logout-item" role="menuitem" disabled><Icon name="arrow" size={17} /><span>Log out</span></button>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="content">
          {activeNav === "Overview" ? (
          <>
          <section className="welcome-row">
            <div>
              <p className="eyebrow">MONDAY, JUNE 9</p>
              <h1>Good morning, Sophia</h1>
              <p>Here’s what’s happening with your health today.</p>
            </div>
            <button className="secondary-button" onClick={openMessage}><Icon name="message" size={18} /> Message care team</button>
          </section>

          <section className="priority-card">
            <div className="priority-icon"><Icon name="calendar" size={22} /></div>
            <div className="priority-content">
              <div className="priority-heading">
                <span className="pill amber">FOLLOW-UP NEEDED</span>
                <span className="muted">Due by June 20</span>
              </div>
              <h2>Check in about your new medication</h2>
              <p>Dr. Chen would like to hear how you’re feeling after starting Lisinopril.</p>
              <div className="doctor-line">
                <span className="doctor-avatar">EC</span>
                <span><strong>Dr. Elena Chen</strong><small>Primary care physician</small></span>
              </div>
            </div>
            <div className="priority-actions">
              <button className="primary-button" onClick={openFollowUp}>Review follow-up <Icon name="arrow" size={17} /></button>
            </div>
          </section>

          <section className="recent-visit-card">
            <div className="recent-visit-heading">
              <div className="icon-box lavender"><Icon name="file" size={21} /></div>
              <div><p className="card-kicker">RECENT VISIT · JUNE 4</p><h2>Annual wellness visit</h2><p>With Dr. Elena Chen · Primary Care</p></div>
            </div>
            <div className="recent-visit-takeaway">
              <span className="spark">✦</span>
              <div><strong>Key takeaway</strong><p>Your blood pressure has improved. Continue your current plan and check in after two weeks.</p></div>
            </div>
            <div className="recent-visit-result"><span>Blood pressure</span><strong>124/78 <small>Normal</small></strong></div>
            <button className="primary-button" onClick={() => setDetailView("visit")}>Understand this visit <Icon name="arrow" size={16} /></button>
          </section>

          <div className="section-title">
            <div><h2>Your care at a glance</h2><p>Stay up to date with your latest health activity.</p></div>
          </div>

          <section className="dashboard-grid">
            <article className="panel lab-panel">
              <div className="panel-header">
                <div className="icon-box blue"><Icon name="flask" size={21} /></div>
                <span className="pill blue">IN PROGRESS</span>
              </div>
              <p className="card-kicker">LAB TEST</p>
              <h3>Comprehensive Metabolic Panel</h3>
              <p className="card-meta">Collected June 6 at Westside Labs</p>
              <div className="lab-progress">
                <div className="progress-track"><span></span></div>
                <div className="progress-labels">
                  <span><i className="done"><Icon name="check" size={12} /></i>Collected</span>
                  <span><i className="done"><Icon name="check" size={12} /></i>Processing</span>
                  <span><i></i>Ready</span>
                </div>
              </div>
              <div className="estimate"><Icon name="clock" size={18} /><span><small>Estimated ready</small><strong>Tomorrow by 2:00 PM</strong></span></div>
              <button className="text-button" onClick={() => setDetailView("lab")}>Track lab test <Icon name="chevron" size={16} /></button>
            </article>

            <article className="panel appointments-panel">
              <div className="panel-header compact">
                <div><p className="card-kicker">UPCOMING</p><h3>Appointments</h3></div>
                <button className="small-link" disabled>View all</button>
              </div>
              <div className="empty-calendar">
                <div className="calendar-art"><Icon name="calendar" size={25} /><span className="mini-check"><Icon name="check" size={11} /></span></div>
                <strong>No upcoming appointments</strong>
                <p>Need to see your care team?</p>
                <button className="outline-button" onClick={openSchedule}>Schedule an appointment</button>
              </div>
              <div className="care-team">
                <span className="doctor-avatar">EC</span>
                <div><small>YOUR PRIMARY CARE DOCTOR</small><strong>Dr. Elena Chen</strong></div>
                <button aria-label="Message Dr. Chen" onClick={openMessage}><Icon name="message" size={18} /></button>
              </div>
            </article>
          </section>

          <section className="health-tip">
            <div className="tip-icon">✦</div>
            <div><span>CARE TIP</span><strong>Small steps make a difference</strong><p>A 10-minute walk after meals can support healthy blood pressure.</p></div>
            <button disabled>Read more <Icon name="arrow" size={15} /></button>
          </section>
          </>
          ) : (
            <PortalPage
              page={activeNav}
              onLab={() => setDetailView("lab")}
              onVisit={() => setDetailView("visit")}
              onMessage={openMessage}
              onSchedule={openSchedule}
            />
          )}
        </div>
      </main>

      {flowStep > 0 && (
        <div className="modal-backdrop" role="presentation">
          <section className="flow-modal" role="dialog" aria-modal="true" aria-label="Follow-up flow">
            <button className="modal-close" onClick={closeFlow} aria-label="Close"><Icon name="close" size={20} /></button>
            {flowStep < 5 && (
              <div className="flow-progress">
                {[1, 2, 3, 4].map((step) => <span key={step} className={flowStep >= step ? "filled" : ""}></span>)}
              </div>
            )}

            {flowStep === 1 && (
              <div className="flow-content">
                <span className="flow-icon amber"><Icon name="calendar" size={25} /></span>
                <p className="eyebrow">FOLLOW-UP REMINDER</p>
                <h2>How are you feeling on your new medication?</h2>
                <p className="flow-lead">Dr. Chen asked you to check in two weeks after starting Lisinopril.</p>
                <div className="detail-card">
                  <div><span>Medication</span><strong>Lisinopril, 10 mg</strong></div>
                  <div><span>Started</span><strong>June 4, 2025</strong></div>
                  <div><span>Follow up by</span><strong>June 20, 2025</strong></div>
                </div>
                <div className="note-box"><strong>From your visit notes</strong><p>“Monitor for dizziness or a persistent cough. Send me a message with an update, then book a brief follow-up.”</p></div>
                <button className="primary-button full" onClick={() => setFlowStep(2)}>Send a message to Dr. Chen <Icon name="arrow" size={17} /></button>
              </div>
            )}

            {flowStep === 2 && (
              <div className="flow-content">
                <button className="back-button" onClick={() => flowOrigin === "message" ? closeFlow() : setFlowStep(1)}>← Back</button>
                <p className="eyebrow">MESSAGE YOUR CARE TEAM</p>
                <h2>Write a message to Dr. Chen</h2>
                <div className="recipient-row"><span className="doctor-avatar">EC</span><div><small>TO</small><strong>Dr. Elena Chen & care team</strong></div><span className="response-time"><Icon name="clock" size={14} /> Usually replies in 1 day</span></div>
                <label className="message-label">Your update</label>
                <textarea value={message} onChange={(event) => setMessage(event.target.value)} maxLength={800} />
                <div className="character-count">{message.length}/800</div>
                <label className="check-row"><input type="checkbox" defaultChecked /><span><strong>Share recent blood pressure readings</strong><small>June 5–9 average: 122/79</small></span></label>
                <div className="privacy-inline"><Icon name="shield" size={16} /> This message is securely shared with your care team.</div>
                <button className="primary-button full" onClick={() => setFlowStep(3)}><Icon name="send" size={17} /> Send message & continue</button>
              </div>
            )}

            {flowStep === 3 && (
              <div className="flow-content">
                <button className="back-button" onClick={() => flowOrigin === "schedule" ? closeFlow() : setFlowStep(2)}>← Back</button>
                {flowOrigin !== "schedule" && <span className="success-mini"><Icon name="check" size={14} /> Message sent</span>}
                <p className="eyebrow">SCHEDULE FOLLOW-UP</p>
                <h2>Choose a date and time</h2>
                <p className="flow-lead">A 20-minute video visit with Dr. Elena Chen.</p>
                <div className="month-row"><button disabled>‹</button><strong>June 2025</strong><button disabled>›</button></div>
                <div className="date-grid">
                  {scheduleDates.map((item) => {
                    const value = `${item.day} ${item.date}`;
                    return <button key={value} className={selectedDate === value ? "selected" : ""} onClick={() => setSelectedDate(value)}><small>{item.day}</small><strong>{item.date}</strong></button>;
                  })}
                </div>
                <label className="message-label">Available times</label>
                <div className="time-grid">
                  {scheduleTimes.map((time) => <button key={time} className={selectedTime === time ? "selected" : ""} onClick={() => setSelectedTime(time)}>{time}</button>)}
                </div>
                <button className="primary-button full" onClick={() => setFlowStep(4)}>Review appointment <Icon name="arrow" size={17} /></button>
              </div>
            )}

            {flowStep === 4 && (
              <div className="flow-content">
                <button className="back-button" onClick={() => setFlowStep(3)}>← Back</button>
                <p className="eyebrow">CONFIRM APPOINTMENT</p>
                <h2>Does everything look right?</h2>
                <div className="appointment-summary">
                  <div className="summary-date"><span>JUN</span><strong>{selectedDate.split(" ")[1]}</strong></div>
                  <div><h3>Medication follow-up</h3><p>{selectedDate.split(" ")[0]}day, June {selectedDate.split(" ")[1]} at {selectedTime}</p><span><Icon name="video" size={15} /> Video visit · 20 minutes</span></div>
                </div>
                <div className="provider-summary"><span className="doctor-avatar">EC</span><div><small>WITH</small><strong>Dr. Elena Chen</strong><p>Primary care physician</p></div></div>
                <div className="info-row"><Icon name="bell" size={18} /><span><strong>We’ll remind you</strong><small>24 hours before your appointment</small></span></div>
                <button className="primary-button full" onClick={() => setFlowStep(5)}>Confirm appointment</button>
              </div>
            )}

            {flowStep === 5 && (
              <div className="flow-content confirmation">
                <div className="confirmation-mark"><Icon name="check" size={32} /></div>
                <p className="eyebrow">APPOINTMENT CONFIRMED</p>
                <h2>You’re all set, Sophia</h2>
                <p className="flow-lead">{flowOrigin === "schedule" ? "Your follow-up appointment is booked." : "Your follow-up is booked and your care team has received your message."}</p>
                <div className="confirmation-card">
                  <div className="summary-date"><span>JUN</span><strong>{selectedDate.split(" ")[1]}</strong></div>
                  <div><strong>Medication follow-up</strong><p>{selectedDate.split(" ")[0]}day at {selectedTime}</p><span><Icon name="video" size={15} /> Video visit with Dr. Chen</span></div>
                </div>
                <button className="secondary-button full" disabled><Icon name="calendar" size={17} /> Add to calendar</button>
                <button className="primary-button full" onClick={closeFlow}>Return to dashboard</button>
              </div>
            )}
          </section>
        </div>
      )}

      {detailView && (
        <div className="modal-backdrop" role="presentation">
          <section className="detail-modal" role="dialog" aria-modal="true" aria-label={detailView === "lab" ? "Lab test tracking" : "Visit summary"}>
            <button className="modal-close" onClick={() => setDetailView(null)} aria-label="Close"><Icon name="close" size={20} /></button>

            {detailView === "lab" && (
              <div className="detail-content">
                <div className="detail-heading">
                  <span className="flow-icon blue"><Icon name="flask" size={25} /></span>
                  <div><span className="pill blue">IN PROGRESS</span><h2>Comprehensive Metabolic Panel</h2><p>Ordered by Dr. Elena Chen · Collected June 6</p></div>
                </div>
                <div className="context-banner">
                  <span className="context-spark">✦</span>
                  <div><strong>What this test checks</strong><p>This common blood test gives your care team a broad look at your kidney and liver health, blood sugar, and electrolyte balance. It helps explain how your body is responding to your new medication.</p></div>
                </div>
                <h3 className="detail-section-title">Your sample’s journey</h3>
                <div className="tracking-timeline">
                  <div className="tracking-step complete"><span className="tracking-marker"><Icon name="check" size={14} /></span><div><strong>Sample collected</strong><p>Westside Labs · June 6 at 9:42 AM</p><small>Your blood sample was labeled and prepared for transport.</small></div></div>
                  <div className="tracking-step complete"><span className="tracking-marker"><Icon name="check" size={14} /></span><div><strong>Arrived at the lab</strong><p>June 6 at 11:18 AM</p><small>The lab checked your sample and confirmed it was ready to test.</small></div></div>
                  <div className="tracking-step current"><span className="tracking-marker"><span className="pulse-dot"></span></span><div><strong>Testing in progress</strong><p>Updated today at 8:15 AM</p><small>Lab specialists are measuring the levels in your blood. No action is needed from you.</small></div></div>
                  <div className="tracking-step"><span className="tracking-marker"></span><div><strong>Results and doctor’s explanation</strong><p>Expected tomorrow by 2:00 PM</p><small>We’ll let you know when your results and a plain-language explanation are ready.</small></div></div>
                </div>
                <label className="update-toggle">
                  <span className="toggle-icon"><Icon name="bell" size={18} /></span>
                  <span><strong>Updates at every stage</strong><small>Get notified when your lab moves forward or needs attention.</small></span>
                  <input type="checkbox" checked={labUpdates} onChange={() => setLabUpdates(!labUpdates)} />
                  <i></i>
                </label>
                <div className="reassurance-note"><Icon name="shield" size={18} /><p><strong>Results won’t arrive without context.</strong> Dr. Chen’s team will highlight what matters, what’s normal, and whether you need to do anything next.</p></div>
              </div>
            )}

            {detailView === "visit" && (
              <div className="detail-content visit-detail">
                <p className="eyebrow">PLAIN-LANGUAGE VISIT SUMMARY</p>
                <h2>Your annual wellness visit</h2>
                <p className="detail-subtitle">June 4, 2025 with Dr. Elena Chen</p>
                <div className="summary-hero">
                  <span className="context-spark">✦</span>
                  <div><small>THE BIG PICTURE</small><strong>Your blood pressure is improving, and your overall plan is working.</strong><p>Dr. Chen wants you to continue your current habits and see how you feel on the new medication over the next two weeks.</p></div>
                </div>
                <div className="highlight-grid">
                  <article className="highlight-card"><span className="highlight-icon result"><Icon name="check" size={18} /></span><small>RESULT</small><strong>Your blood pressure was in a healthy range</strong><p>124/78 is within the normal range and lower than at your previous visit.</p></article>
                  <article className="highlight-card"><span className="highlight-icon plan"><Icon name="file" size={18} /></span><small>WHAT CHANGED</small><strong>You started Lisinopril, 10 mg</strong><p>Take one tablet each morning to help keep your blood pressure steady.</p></article>
                </div>
                <h3 className="detail-section-title">What to do next</h3>
                <div className="next-steps">
                  <div><span>1</span><p><strong>Keep taking your medication daily</strong><small>Try to take it at the same time each morning.</small></p></div>
                  <div><span>2</span><p><strong>Watch for dizziness or a persistent cough</strong><small>Message your care team if either symptom concerns you.</small></p></div>
                  <div><span>3</span><p><strong>Check in by June 20</strong><small>Tell Dr. Chen how you’re feeling and schedule a brief follow-up.</small></p></div>
                </div>
                <details className="doctor-notes">
                  <summary>See the doctor’s original notes <span>⌄</span></summary>
                  <p>BP improved from prior visit. Initiate lisinopril 10 mg QD. Discussed potential ACE inhibitor adverse effects including orthostatic dizziness and persistent cough. CMP ordered. Patient to report home BP readings and follow up in two weeks.</p>
                </details>
                <div className="summary-actions">
                  <button className="secondary-button" disabled><Icon name="file" size={17} /> Download summary</button>
                  <button className="primary-button" onClick={() => { setDetailView(null); openFollowUp(); }}>Start my follow-up <Icon name="arrow" size={17} /></button>
                </div>
                <p className="summary-source"><Icon name="shield" size={14} /> This summary was created from Dr. Chen’s signed visit notes. The original record is always available above.</p>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
