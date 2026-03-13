const propiedadesAlquiler = [
    {
        id: 0,
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2 Habitaciones',
        baños: '2 baños',
        costo: 2000,
        smoke: true,
        pets: false,
    },
        {
        id: 1,
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: '3 Habitaciones',
        costo: 2500,
        smoke: false,
        pets: true,
    },
        {
        id: 2,
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2 Habitaciones',
        baños: '2 baños',
        costo: 2200,
        smoke: false,
        pets: false,
    },
        {
        id: 3,
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2 Habitaciones',
        baños: '2 baños',
        costo: 2200,
        smoke: true,
        pets: true,
    },
        {
        id: 4,
        nombre: 'Apartamento moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2 Habitaciones',
        baños: '2 baños',
        costo: 2000,
        smoke: true,
        pets: false,
    },
        {
        id: 5,
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1430285561322-7808604715df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2 Habitaciones',
        baños: '2 baños',
        costo: 2200,
        smoke: false,
        pets: true,
    }
]


const divAlq = document.getElementById("carta")

const renderAlq = ()=> {
    let template = ""
    for (a of propiedadesAlquiler){
        template += `
            <div class="col-md-4 mb-4">
            <div class="card">
            <img src="${a.src}" class="card-img-top" alt="Imagen del departamento"/>
              <div class="card-body">
                <h5 class="card-title">${a.nombre}</h5>
                <p class="card-text">${a.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i>  ${a.ubicacion}</p>
                <p>
                  <i class="fas fa-bed"></i>  ${a.habitaciones} |
                  <i class="fas fa-bath"></i> ${a.baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${a.costo}</p>
                <p>${a.smoke == true ? "<span class='text-success'><i class='fas fa-smoking'></i> Permitido fumar</span>" 
                    : "<span class='text-danger'><i class='fas fa-smoking-ban'></i> No se permite fumar</span>"}</p>

                <p>${a.pets == true ? "<span class='text-success'><i class='fas fa-paw'></i> Mascotas permitidas</span>" 
                    : "<span class='text-danger'><i class='fas fa-ban'></i> No se permiten mascotas</span>"}</p>
              </div>
              </div>
              </div>
        `
    }
    divAlq.innerHTML= template
}
renderAlq()