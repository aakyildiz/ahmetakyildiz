interface ExperienceCardProps {
  date?: string;
  title: string;
  company?: string;
  description: string;
  tech: string[];
  link?: string;
}

export default function ExperienceCard({ date, title, company, description, tech, link }: ExperienceCardProps) {
  return (
    <div className="experience-card">
      {date && <p className="experience-date">{date}</p>}
      <h3 className="experience-title">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {title}
            <svg className="inline-block w-4 h-4 ml-1 -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ) : title}
        {company && ` • ${company}`}
      </h3>
      <p className="experience-description">{description}</p>
      <div>
        {tech.map((item) => (
          <span key={item} className="tech-badge">{item}</span>
        ))}
      </div>
    </div>
  );
}

