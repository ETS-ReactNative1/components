function getEmailsData(agents, subject, message) {
  const emailsData = [];

  for (const agent of agents) {
    emailsData.push({ subject, message, to: agent.email });
  }

  return emailsData;
}

function getEmailsDataFromTemplate(emails, agents, template, listing) {
  const emailsData = [];

  for (const email of emails) {
    for (const agent of agents) {
      const user = { email };
      const subject = template.subject({ listing, agent, user });
      const message = template.message({ listing, agent, user });
      emailsData.push({ subject, message, from: email, to: agent.email });
    }
  }

  return emailsData;
}

export { getEmailsData, getEmailsDataFromTemplate };
