type Engineer = {
  name: string;
  role: string;
};

type Blogger = {
  name: string;
  follower: number;
};

// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {}

const nozel: EngineerBlogger = {
  name: 'nozel',
  role: 'backend',
  follower: 4000,
};

function toUpperCase(x: string | number) {
  if (typeof x == 'string') {
    return x.toUpperCase();
  }
  return '';
}

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ('role' in nomadWorker) {
    console.log(nomadWorker.role);
  }
  if ('follower' in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}

describeProfile();

class Dog {
  speak() {
    console.log('bow-wow');
  }
}

class Bird {
  speak() {
    console.log('piyo-piyo');
  }
  fly() {
    console.log('flutter');
  }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  if (pet instanceof Bird) {
    pet.fly();
  }
}

havePet(new Dog());
