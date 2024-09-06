import { DomainEvents } from '@/core/events/domain-events'
import type { StudentsRepository } from '@/domain/finder/application/repositories/students-repository'
import type { Student } from '@/domain/finder/enterprise/entities/student'

export class InMemoryStudentsRepository implements StudentsRepository {
	public items: Student[] = []

	async findByEmail(email: string) {
		const student = this.items.find((item) => item.email === email)

		if (!student) {
			return null
		}

		return student
	}

	async create(student: Student) {
		this.items.push(student)

		DomainEvents.dispatchEventsForAggregate(student.id)
	}
}
