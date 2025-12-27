interface RateLimitEntry {
  count: number;
  resetAt: number;
}

class RateLimiter {
  private requests: Map<string, RateLimitEntry> = new Map();
  private readonly maxRequests: number;
  private readonly windowMs: number;

  constructor(maxRequests: number = 3, windowMinutes: number = 60) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMinutes * 60 * 1000;

    setInterval(() => this.cleanup(), 5 * 60 * 1000);
  }

  check(identifier: string): { allowed: boolean; remaining: number; resetAt: number } {
    const now = Date.now();
    const entry = this.requests.get(identifier);

    if (!entry || now > entry.resetAt) {
      const resetAt = now + this.windowMs;
      this.requests.set(identifier, { count: 1, resetAt });
      return { allowed: true, remaining: this.maxRequests - 1, resetAt };
    }

    if (entry.count < this.maxRequests) {
      entry.count++;
      this.requests.set(identifier, entry);
      return { allowed: true, remaining: this.maxRequests - entry.count, resetAt: entry.resetAt };
    }

    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }

  private cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.requests.entries()) {
      if (now > entry.resetAt) {
        this.requests.delete(key);
      }
    }
  }
}

export const contactRateLimiter = new RateLimiter(3, 60);
