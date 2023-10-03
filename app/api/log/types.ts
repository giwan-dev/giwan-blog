import { Commit } from "@/services/github"

export interface LogApiResponse {
  commits: Commit[]
}
