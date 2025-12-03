interface ExperienceCardProps {
  date?: string;
  title: string;
  company?: string;
  description: string;
  tech: string[];
}

export default function ExperienceCard({ date, title, company, description, tech }: ExperienceCardProps) {
  return (
    <div className="experience-card">
      {date && <p className="experience-date">{date}</p>}
      <h3 className="experience-title">
        {title}{company && ` • ${company}`}
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

