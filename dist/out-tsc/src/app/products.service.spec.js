import { TestBed, inject } from '@angular/core/testing';
import { ProductsService } from './products.service';
describe('ProductsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductsService]
        });
    });
    it('should be created', inject([ProductsService], (service) => {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=products.service.spec.js.map