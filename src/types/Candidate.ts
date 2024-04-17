export default interface Candidate {
  id: number;
  projectId: number;
  date_created: string; 
  linked_in_url: string;
  candidate_name: string;
  candidate_job_title: string;
  candidate_image_url: string;
  company_name: string;
  company_duration_in_months: number;
  company_image_url: string;
  notes: string;
  relevance: number;
  contact_status: number;
  contact_date: string; 
}
