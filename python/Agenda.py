import pymongo
client = pymongo.MongoClient("mongodb://localhost:27017/")
class Agenda:
    def _init_(self, cliente,nombre_bbdd,coleccion):
        self.cliente = cliente
        self.data_base = self.cliente[nombre_bbdd]
        self.nombre_bbdd = nombre_bbdd
        self.coleccion = coleccion
        self.coleccion = self.data_base[coleccion]
        self.contactos =[]
        
    def insertar_contacto(self,nombre,apellido,telefono,email):
        def borrar_contacto(self,id):
            def actualizar_contacto(self,id,nombre=None,apellido=None,telefono=None,email=None):
                agenda = Agenda(cliente,'agenda', 'contactos')
                    
                                
        #self.bbdd = client[self.nombre_bbdd]
        #self.coleccion.create_index([("id", pymongo.ASCENDING)])
        #self.bbdd.create_index([("id", pymongo.ASCENDING)])
        #self.coleccion.create_index([("id", pymongo.ASCENDING)])
    