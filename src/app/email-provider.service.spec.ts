import { TestBed } from '@angular/core/testing';

import { EmailProviderService } from './email-provider.service';

describe('EmailProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailProviderService = TestBed.get(EmailProviderService);
    expect(service).toBeTruthy();
  });
});
