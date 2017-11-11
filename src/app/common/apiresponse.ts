export class ApiResponse {
  constructor(
    public status: string,
    public statusCode: number,
    public message: string,
    public data: any
  ) {}
}
