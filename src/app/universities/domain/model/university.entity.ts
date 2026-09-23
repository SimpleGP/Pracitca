export class University {
  constructor(
    public name: string,
    public country: string,
    public alpha_two_code: string,
    public domains: string[],
    public web_pages: string[]
  ) {}
}
