export interface FunQLRequest {
 schema: {
  contents: {
   dynamic: {
    models: {
     User: {
      doits: {
       loginRequest: {
        details: {
         set: {
          phone: number,
          countryCode: string
         },
         get?: {
          ok?: 0 | 1,
          phone?: 0 | 1,
          countryCode?: 0 | 1
         }
        }
       },
       login: {
        details: {
         set: {
          phone: number,
          code: string
         },
         get?: {
          user: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1,
             states?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             },
             cities?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             }
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1
             },
             cities?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             }
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             state?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             },
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1
             }
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          token?: 0 | 1
         }
        }
       },
       insertProfileInfo: {
        details: {
         set: {
          name: string,
          lastName: string,
          gender: 'MALE' | 'FEMALE',
          birthDate?: any,
          postalCode?: string,
          email: any,
          creditCardNumber?: number
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          creditCardNumber?: 0 | 1,
          profilePicture?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          addresses?: {
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           city?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           addressTxt?: 0 | 1,
           addressId?: 0 | 1
          }
         }
        }
       },
       getUser: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          creditCardNumber?: 0 | 1,
          profilePicture?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          addresses?: {
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1,
            states?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1,
              states?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             cities?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              }
             }
            },
            cities?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             state?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1,
              states?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             }
            }
           },
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1,
             states?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             cities?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              }
             }
            },
            cities?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             state?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1,
              states?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             }
            }
           },
           city?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1,
              states?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             cities?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              }
             }
            },
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1,
             states?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             cities?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              }
             }
            }
           },
           addressTxt?: 0 | 1,
           addressId?: 0 | 1
          }
         }
        }
       },
       getUsers: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           name?: 1 | -1,
           lastName?: 1 | -1,
           birthDate?: 1 | -1,
           email?: 1 | -1,
           phone?: 1 | -1
          },
          name?: string,
          lastName?: string,
          level?: 'Admin' | 'Normal' | 'Editor' | 'Author' | 'Ghost'
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          creditCardNumber?: 0 | 1,
          profilePicture?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          addresses?: {
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1,
            states?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            cities?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           },
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            cities?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           },
           city?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            }
           },
           addressTxt?: 0 | 1,
           addressId?: 0 | 1
          }
         }
        }
       },
       updateUser: {
        details: {
         set: {
          userId: string,
          name?: string,
          lastName?: string,
          gender?: 'MALE' | 'FEMALE',
          profilePicture?: {
           _id: any,
           filename: string,
           type: string,
           size: number
          },
          birthDate?: any,
          postalCode?: string,
          email?: any,
          creditCardNumber?: number
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          creditCardNumber?: 0 | 1,
          profilePicture?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          addresses?: {
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           city?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           addressTxt?: 0 | 1,
           addressId?: 0 | 1
          }
         }
        }
       },
       updateUserRole: {
        details: {
         set: {
          _id: string,
          role: any[]
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          creditCardNumber?: 0 | 1,
          profilePicture?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          addresses?: {
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           city?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           addressTxt?: 0 | 1,
           addressId?: 0 | 1
          }
         }
        }
       },
       createGhostUser: {
        details: any
       },
       getMe: {
        details: {
         set?: any,
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          creditCardNumber?: 0 | 1,
          profilePicture?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          addresses?: {
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1,
            states?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            cities?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           },
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            cities?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           },
           city?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            }
           },
           addressTxt?: 0 | 1,
           addressId?: 0 | 1
          }
         }
        }
       },
       addUserAddress: {
        details: {
         set: {
          userId?: string,
          address: {
           country: string,
           state: string,
           city: string,
           addressTxt: string,
           location: {
            type: string,
            location: any
           }
          }
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          creditCardNumber?: 0 | 1,
          profilePicture?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          addresses?: {
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           city?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           addressTxt?: 0 | 1,
           addressId?: 0 | 1
          }
         }
        }
       },
       updateUserAddress: {
        details: {
         set: {
          userId?: string,
          address: {
           addressId: string,
           country?: string,
           state?: string,
           city?: string,
           addressTxt?: string,
           location?: {
            type: string,
            location: any
           }
          }
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          creditCardNumber?: 0 | 1,
          profilePicture?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          addresses?: {
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           city?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           addressTxt?: 0 | 1,
           addressId?: 0 | 1
          }
         }
        }
       }
      }
     },
     Country: {
      doits: {
       createCountry: {
        details: {
         set: {
          name: string,
          enName: string,
          countryCode: any[],
          geometries?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          countryCode?: 0 | 1,
          states?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          cities?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           }
          }
         }
        }
       },
       updateCountry: {
        details: {
         set: {
          _id?: string,
          name?: string,
          enName?: string,
          countryCode?: any,
          geometries?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          countryCode?: 0 | 1,
          states?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          cities?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           }
          }
         }
        }
       },
       deleteCountry: {
        details: {
         set: {
          _id: string
         }
        }
       },
       getCountry: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          countryCode?: 0 | 1,
          states?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1
          },
          cities?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1
          }
         }
        }
       },
       getCountries: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           name?: 1 | -1
          },
          name?: string,
          enName?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          countryCode?: 0 | 1,
          states?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          cities?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           }
          }
         }
        }
       }
      }
     },
     City: {
      doits: {
       createCity: {
        details: {
         set: {
          name: string,
          enName: string,
          stateId: string,
          geometries?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          state?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          country?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           countryCode?: 0 | 1,
           states?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          }
         }
        }
       },
       updateCity: {
        details: {
         set: {
          _id: string,
          name?: string,
          enName?: string,
          stateId?: string,
          geometries?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          state?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          country?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           countryCode?: 0 | 1,
           states?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          }
         }
        }
       },
       deleteCity: {
        details: {
         set: {
          _id: string
         }
        }
       },
       getCity: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          state?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1
          },
          country?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           countryCode?: 0 | 1
          }
         }
        }
       },
       getCities: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           name?: 1 | -1
          },
          name?: string,
          stateId?: any,
          countryId?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          state?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          country?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           countryCode?: 0 | 1,
           states?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          }
         }
        }
       }
      }
     },
     State: {
      doits: {
       updateState: {
        details: {
         set: {
          _id: string,
          name?: string,
          enName?: string,
          countryId?: string,
          geometries?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          country?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           countryCode?: 0 | 1,
           states?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          cities?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           }
          }
         }
        }
       },
       deleteState: {
        details: {
         set: {
          _id: string
         }
        }
       },
       createState: {
        details: {
         set: {
          name: string,
          enName: string,
          countryId: string,
          geometries?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          country?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           countryCode?: 0 | 1,
           states?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          cities?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           }
          }
         }
        }
       },
       getState: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           name?: 1 | -1,
           enName?: 1 | -1
          },
          _id?: string,
          name?: string,
          enName?: string,
          countryId?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          country?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           countryCode?: 0 | 1,
           states?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          cities?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           }
          }
         }
        }
       },
       getStates: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           name?: 1 | -1
          },
          name?: string,
          countryId?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          state?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          country?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           countryCode?: 0 | 1,
           states?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          }
         }
        }
       }
      }
     },
     BlogTag: {
      doits: {
       createBlogTag: {
        details: {
         set: {
          name: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1
         }
        }
       },
       updateBlogTag: {
        details: {
         set: {
          _id?: any,
          name?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           },
           likedUsers?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           blogTags?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           blogCategory?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1
           }
          }
         }
        }
       },
       deleteBlogTag: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          }
         }
        }
       },
       getBlogTag: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           },
           likedUsers?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           blogTags?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           blogCategory?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1
           }
          }
         }
        }
       },
       getBlogTags: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           name?: 1 | -1
          },
          name?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            addresses?: {
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1
             },
             state?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             },
             city?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             },
             addressTxt?: 0 | 1,
             addressId?: 0 | 1
            }
           },
           blogCategory?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          }
         }
        }
       }
      }
     },
     BlogCategory: {
      doits: {
       createBlogCategory: {
        details: {
         set: {
          name: string,
          enName: string,
          icon?: {
           _id: any,
           filename: string,
           type: string,
           size: number
          },
          description: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          icon?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          }
         }
        }
       },
       updateBlogCategory: {
        details: {
         set: {
          _id?: string,
          name?: string,
          enName?: string,
          icon?: {
           _id: any,
           filename: string,
           type: string,
           size: number
          },
          description?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          icon?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          }
         }
        }
       },
       deleteBlogCategory: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          icon?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          }
         }
        }
       },
       getBlogCategory: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          icon?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           },
           likedUsers?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           blogTags?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           blogCategory?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1
           }
          }
         }
        }
       },
       getBlogCategories: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           name?: 1 | -1
          },
          name?: string,
          enName?: string,
          description?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          icon?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           },
           likedUsers?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           blogTags?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           blogCategory?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1
           }
          }
         }
        }
       }
      }
     },
     Comment: {
      doits: {
       createComment: {
        details: {
         set: {
          content: string,
          blogPostId?: any,
          wareId?: any,
          commentStatus: 'ACCEPT' | 'PENDING' | 'REJECT',
          parentId?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          content?: 0 | 1,
          commentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           }
          },
          blogPost?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          },
          ware?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1
          },
          repliedComments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1
          }
         }
        }
       },
       updateComment: {
        details: {
         set: {
          _id?: string,
          commentStatus: 'ACCEPT' | 'PENDING' | 'REJECT'
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          icon?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           },
           likedUsers?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           blogTags?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           blogCategory?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1
           }
          }
         }
        }
       },
       deleteComment: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          content?: 0 | 1,
          commentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           }
          },
          blogPost?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          },
          ware?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1
          },
          repliedComments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1
          }
         }
        }
       },
       getCommentReplies: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          content?: 0 | 1,
          commentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           }
          },
          blogPost?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          },
          ware?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1
          },
          repliedComments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1
          }
         }
        }
       },
       getComments: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           commentStatus?: 1 | -1,
           content?: 1 | -1
          },
          content?: string,
          blogPostId: string,
          commentStatus?: 'ACCEPT' | 'REJECT' | 'PENDING'
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          content?: 0 | 1,
          commentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          blogPost?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           },
           likedUsers?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           blogTags?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           blogCategory?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1
           }
          },
          ware?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1,
           wareType?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1
           },
           orders?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalPrice?: 0 | 1,
            confirmationNumber?: 0 | 1,
            discount?: 0 | 1,
            discountCode?: 0 | 1,
            paymentStatus?: 0 | 1,
            orderStatus?: 0 | 1
           },
           wareCategories?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           averageScore?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalRate?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          },
          repliedComments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           blogPost?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           ware?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           repliedComments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          }
         }
        }
       },
       getComment: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          content?: 0 | 1,
          commentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           }
          },
          blogPost?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          },
          ware?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1
          },
          repliedComments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1
          }
         }
        }
       }
      }
     },
     BlogPost: {
      doits: {
       createBlogPost: {
        details: {
         set: {
          title: string,
          summary: string,
          content: string,
          photo?: {
           _id: any,
           filename: string,
           type: string,
           size: number
          },
          blogCategoryID: string,
          blogTagIDs: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          title?: 0 | 1,
          summary?: 0 | 1,
          content?: 0 | 1,
          photo?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          totalLikes?: 0 | 1,
          totalViews?: 0 | 1,
          totalComments?: 0 | 1,
          author?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          comments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           blogPost?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           ware?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           repliedComments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          },
          likedUsers?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          blogTags?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          },
          blogCategory?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          }
         }
        }
       },
       updateBlogPost: {
        details: {
         set: {
          _id?: string,
          title?: string,
          summary?: string,
          content?: string,
          photo?: {
           _id: any,
           filename: string,
           type: string,
           size: number
          },
          blogCategoryID?: string,
          blogTagIDs?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          title?: 0 | 1,
          summary?: 0 | 1,
          content?: 0 | 1,
          photo?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          totalLikes?: 0 | 1,
          totalViews?: 0 | 1,
          totalComments?: 0 | 1,
          author?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          comments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           blogPost?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           ware?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           repliedComments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          },
          likedUsers?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          blogTags?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          },
          blogCategory?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          }
         }
        }
       },
       deleteBlogPost: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          title?: 0 | 1,
          summary?: 0 | 1,
          content?: 0 | 1,
          photo?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          totalLikes?: 0 | 1,
          totalViews?: 0 | 1,
          totalComments?: 0 | 1,
          author?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          comments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           blogPost?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           ware?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           repliedComments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          },
          likedUsers?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          blogTags?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          },
          blogCategory?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          }
         }
        }
       },
       getBlogPost: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          title?: 0 | 1,
          summary?: 0 | 1,
          content?: 0 | 1,
          photo?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          totalLikes?: 0 | 1,
          totalViews?: 0 | 1,
          totalComments?: 0 | 1,
          author?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           }
          },
          blogTags?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1
          },
          blogCategory?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1
          },
          comments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            addresses?: {
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1
             },
             state?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             },
             city?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             },
             addressTxt?: 0 | 1,
             addressId?: 0 | 1
            }
           }
          }
         }
        }
       },
       getBlogPosts: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           title?: 1 | -1,
           content?: 1 | -1
          },
          title?: string,
          content?: string,
          blogCategory?: string,
          blogTags?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          title?: 0 | 1,
          summary?: 0 | 1,
          content?: 0 | 1,
          photo?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          totalLikes?: 0 | 1,
          totalViews?: 0 | 1,
          totalComments?: 0 | 1,
          author?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          comments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           blogPost?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           ware?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           repliedComments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          },
          likedUsers?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          blogTags?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          },
          blogCategory?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          }
         }
        }
       },
       switchBlogPostLike: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          title?: 0 | 1,
          summary?: 0 | 1,
          content?: 0 | 1,
          photo?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          totalLikes?: 0 | 1,
          totalViews?: 0 | 1,
          totalComments?: 0 | 1,
          author?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          comments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           blogPost?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           ware?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           repliedComments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          },
          likedUsers?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          blogTags?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          },
          blogCategory?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          }
         }
        }
       },
       addToPromotions: {
        details: {
         set: {
          _id?: string
         }
        }
       }
      }
     },
     WareType: {
      doits: {
       getWareType: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          icon?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          isDesignable?: 0 | 1,
          features?: 0 | 1,
          wares?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1
          },
          wareCategories?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1
          }
         }
        }
       },
       createWareType: {
        details: {
         set: {
          name: string,
          icon: {
           _id: any,
           filename: string,
           type: string,
           size: number
          },
          description: string,
          isDesignable: boolean,
          features?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          icon?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          isDesignable?: 0 | 1,
          features?: 0 | 1,
          wares?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1
          },
          wareCategories?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1
          }
         }
        }
       },
       deleteWareType: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          brand?: 0 | 1,
          photos?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          properties?: 0 | 1,
          price?: 0 | 1,
          layers?: 0 | 1,
          preDesignFeatures?: 0 | 1,
          preDesignRelations?: 0 | 1,
          wareType?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           isDesignable?: 0 | 1,
           features?: 0 | 1
          },
          orders?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           totalPrice?: 0 | 1,
           confirmationNumber?: 0 | 1,
           discount?: 0 | 1,
           discountCode?: 0 | 1,
           paymentStatus?: 0 | 1,
           orderStatus?: 0 | 1
          },
          wareCategories?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1
          },
          averageScore?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           totalRate?: 0 | 1
          },
          comments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1
          }
         }
        }
       },
       getWareTypes: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           name?: 1 | -1
          },
          name?: string,
          description?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          icon?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          isDesignable?: 0 | 1,
          features?: 0 | 1,
          wares?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1,
           wareType?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1
           },
           orders?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalPrice?: 0 | 1,
            confirmationNumber?: 0 | 1,
            discount?: 0 | 1,
            discountCode?: 0 | 1,
            paymentStatus?: 0 | 1,
            orderStatus?: 0 | 1
           },
           wareCategories?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           averageScore?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalRate?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          },
          wareCategories?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           wares?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           wareType?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1
           }
          }
         }
        }
       },
       updateWareType: {
        details: {
         set: {
          _id?: string,
          name?: string,
          icon?: {
           _id: any,
           filename: string,
           type: string,
           size: number
          },
          description?: string,
          isDesignable?: boolean,
          features: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          icon?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          isDesignable?: 0 | 1,
          features?: 0 | 1,
          wares?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1,
           wareType?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1
           },
           orders?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalPrice?: 0 | 1,
            confirmationNumber?: 0 | 1,
            discount?: 0 | 1,
            discountCode?: 0 | 1,
            paymentStatus?: 0 | 1,
            orderStatus?: 0 | 1
           },
           wareCategories?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           averageScore?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalRate?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          },
          wareCategories?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           wares?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           wareType?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1
           }
          }
         }
        }
       }
      }
     },
     WareCategory: {
      doits: {
       createWareCategory: {
        details: {
         set: {
          name: string,
          wareTypeId: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          wares?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1
          },
          wareType?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           isDesignable?: 0 | 1,
           features?: 0 | 1
          }
         }
        }
       },
       updateWareCategory: {
        details: {
         set: {
          _id?: any,
          name?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          wares?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1,
           wareType?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1
           },
           orders?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalPrice?: 0 | 1,
            confirmationNumber?: 0 | 1,
            discount?: 0 | 1,
            discountCode?: 0 | 1,
            paymentStatus?: 0 | 1,
            orderStatus?: 0 | 1
           },
           wareCategories?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           averageScore?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalRate?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          },
          wareType?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           isDesignable?: 0 | 1,
           features?: 0 | 1,
           wares?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           wareCategories?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           }
          }
         }
        }
       },
       deleteWareCategory: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          wares?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1
          },
          wareType?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           isDesignable?: 0 | 1,
           features?: 0 | 1
          }
         }
        }
       },
       getWareCategory: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          wares?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1
          },
          wareType?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           isDesignable?: 0 | 1,
           features?: 0 | 1
          }
         }
        }
       },
       getWareCategories: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           name?: 1 | -1
          },
          name?: string,
          wareTypeId?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          wares?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1,
           wareType?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1
           },
           orders?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalPrice?: 0 | 1,
            confirmationNumber?: 0 | 1,
            discount?: 0 | 1,
            discountCode?: 0 | 1,
            paymentStatus?: 0 | 1,
            orderStatus?: 0 | 1
           },
           wareCategories?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           averageScore?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalRate?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          },
          wareType?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           isDesignable?: 0 | 1,
           features?: 0 | 1,
           wares?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           wareCategories?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           }
          }
         }
        }
       }
      }
     },
     Ware: {
      doits: {
       getWare: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          brand?: 0 | 1,
          photos?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          properties?: 0 | 1,
          price?: 0 | 1,
          layers?: 0 | 1,
          preDesignFeatures?: 0 | 1,
          preDesignRelations?: 0 | 1,
          wareType?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           isDesignable?: 0 | 1,
           features?: 0 | 1
          },
          orders?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           totalPrice?: 0 | 1,
           confirmationNumber?: 0 | 1,
           discount?: 0 | 1,
           discountCode?: 0 | 1,
           paymentStatus?: 0 | 1,
           orderStatus?: 0 | 1
          },
          wareCategories?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1
          },
          averageScore?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           totalRate?: 0 | 1
          },
          comments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1
          }
         }
        }
       },
       createWare: {
        details: {
         set: {
          name: string,
          brand: string,
          description: string,
          photos: { _id: any, filename: string, type: string, size: number }[],
          wareCategoryIds?: any,
          price: number,
          isDesigned: boolean,
          isPromotion: boolean,
          wareTypeId: string,
          layers?: { pic?: { featureType: 'Pic', width: number, height: number, path: string, position: { x: number, y: number }, rotate?: 90 | 180 | 270, picRepeat?: { path: string, width: number, height: number, repeatType: 'type1' | 'type2' | 'type3' | 'type4' } }, handWriting?: { featureType: 'HandWriting', width: number, height: number, path: string, position: any, color: string, size: 1 | 2 | 3 | 4 | 5 | 6 }, color?: string, text?: { featureType: 'Text', position: { x: number, y: number }, font: string, size: number, color: string, effect: 'italic' | 'bold' | 'underline', align: 'left' | 'right' | 'center' | 'justify', rotate: 90 | 180 | 270 }, emoji?: { featureType: 'Emoji', width: number, height: number, emojis: string, color: string, rotate: 90 | 180 | 270 } }[],
          preDesignFeatures?: { preDesignColor?: { featureType: 'color', colorCode: string, pic: { _id: any, fileName: string, type: string, size: number }[] }, clothSize?: { featureType: 'clothSize', size: 'Small' | 'Medium' | 'large' | 'XL' | '2XL' | '3XL' | '4XL', pic: { _id: any, fileName: string, type: string, size: number }[] } }[],
          preDesignRelations?: { _id: any, preDesignColorId: any, clothSizeId: any, price: any, inventory: any }[]
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          brand?: 0 | 1,
          photos?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          properties?: 0 | 1,
          price?: 0 | 1,
          layers?: 0 | 1,
          preDesignFeatures?: 0 | 1,
          preDesignRelations?: 0 | 1,
          wareType?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           isDesignable?: 0 | 1,
           features?: 0 | 1
          },
          orders?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           totalPrice?: 0 | 1,
           confirmationNumber?: 0 | 1,
           discount?: 0 | 1,
           discountCode?: 0 | 1,
           paymentStatus?: 0 | 1,
           orderStatus?: 0 | 1
          },
          wareCategories?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1
          },
          averageScore?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           totalRate?: 0 | 1
          },
          comments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1
          }
         }
        }
       },
       updateWare: {
        details: {
         set: {
          _id?: string,
          name?: string,
          brand?: string,
          photos?: { _id: any, filename: string, type: string, size: number }[],
          isPromotion: boolean,
          wareCategory?: string,
          layers?: { pic?: { width: number, height: number, path: string, position: { x: number, y: number }, rotate?: 90 | 180 | 270, picRepeat?: { path: string, width: number, height: number, repeatType: 'type1' | 'type2' | 'type3' | 'type4' } }, handWriting?: { width: number, height: number, path: string, position: any, color: string, size: 1 | 2 | 3 | 4 | 5 | 6 }, color?: string, text?: { position: { x: number, y: number }, font: string, size: number, color: string, effect: 'italic' | 'bold' | 'underline', align: 'left' | 'right' | 'center' | 'justify', rotate: 90 | 180 | 270 }, emoji?: { width: number, height: number, emojis: string, color: string, rotate: 90 | 180 | 270 }[] }[],
          preDesignFeatures?: { preDesignColor?: { colorCode: string, pic: { _id: any, fileName: string, type: string, size: number }[] }[], clothSize?: { size: 'Small' | 'Medium' | 'large' | 'XL' | '2XL' | '3XL' | '4XL', pic: { _id: any, fileName: string, type: string, size: number }[] }[] }[]
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          brand?: 0 | 1,
          photos?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          properties?: 0 | 1,
          price?: 0 | 1,
          layers?: 0 | 1,
          preDesignFeatures?: 0 | 1,
          preDesignRelations?: 0 | 1,
          wareType?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           isDesignable?: 0 | 1,
           features?: 0 | 1,
           wares?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           wareCategories?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           }
          },
          orders?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           totalPrice?: 0 | 1,
           confirmationNumber?: 0 | 1,
           discount?: 0 | 1,
           discountCode?: 0 | 1,
           paymentStatus?: 0 | 1,
           orderStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           wares?: {
            ware?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             brand?: 0 | 1,
             photos?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             description?: 0 | 1,
             properties?: 0 | 1,
             price?: 0 | 1,
             layers?: 0 | 1,
             preDesignFeatures?: 0 | 1,
             preDesignRelations?: 0 | 1
            },
            quantity?: 0 | 1,
            warePrice?: 0 | 1,
            description?: 0 | 1
           }
          },
          wareCategories?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           wares?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           wareType?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1
           }
          },
          averageScore?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           totalRate?: 0 | 1,
           ware?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           raters?: {
            user?: {
             _id?: 0 | 1,
             name?: 0 | 1,
             lastName?: 0 | 1,
             phone?: 0 | 1,
             gender?: 0 | 1,
             birthDate?: 0 | 1,
             postalCode?: 0 | 1,
             level?: 0 | 1,
             email?: 0 | 1,
             isActive?: 0 | 1,
             creditCardNumber?: 0 | 1,
             profilePicture?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             }
            }
           }
          },
          comments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           blogPost?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           ware?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           repliedComments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          }
         }
        }
       },
       deleteWare: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          brand?: 0 | 1,
          photos?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          properties?: 0 | 1,
          price?: 0 | 1,
          layers?: 0 | 1,
          preDesignFeatures?: 0 | 1,
          preDesignRelations?: 0 | 1,
          wareType?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           isDesignable?: 0 | 1,
           features?: 0 | 1
          },
          orders?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           totalPrice?: 0 | 1,
           confirmationNumber?: 0 | 1,
           discount?: 0 | 1,
           discountCode?: 0 | 1,
           paymentStatus?: 0 | 1,
           orderStatus?: 0 | 1
          },
          wareCategories?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1
          },
          averageScore?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           totalRate?: 0 | 1
          },
          comments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1
          }
         }
        }
       },
       getWares: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           name?: 1 | -1,
           price?: 1 | -1,
           brand?: 1 | -1
          },
          name?: string,
          brand?: string,
          wareTypes?: any,
          wareCategories?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          brand?: 0 | 1,
          photos?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          properties?: 0 | 1,
          price?: 0 | 1,
          layers?: 0 | 1,
          preDesignFeatures?: 0 | 1,
          preDesignRelations?: 0 | 1,
          wareType?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           isDesignable?: 0 | 1,
           features?: 0 | 1,
           wares?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           wareCategories?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           }
          },
          orders?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           totalPrice?: 0 | 1,
           confirmationNumber?: 0 | 1,
           discount?: 0 | 1,
           discountCode?: 0 | 1,
           paymentStatus?: 0 | 1,
           orderStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           wares?: {
            ware?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             brand?: 0 | 1,
             photos?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             description?: 0 | 1,
             properties?: 0 | 1,
             price?: 0 | 1,
             layers?: 0 | 1,
             preDesignFeatures?: 0 | 1,
             preDesignRelations?: 0 | 1
            },
            quantity?: 0 | 1,
            warePrice?: 0 | 1,
            description?: 0 | 1
           }
          },
          wareCategories?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           wares?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           wareType?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1
           }
          },
          averageScore?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           totalRate?: 0 | 1,
           ware?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           raters?: {
            user?: {
             _id?: 0 | 1,
             name?: 0 | 1,
             lastName?: 0 | 1,
             phone?: 0 | 1,
             gender?: 0 | 1,
             birthDate?: 0 | 1,
             postalCode?: 0 | 1,
             level?: 0 | 1,
             email?: 0 | 1,
             isActive?: 0 | 1,
             creditCardNumber?: 0 | 1,
             profilePicture?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             }
            }
           }
          },
          comments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           blogPost?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           ware?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           repliedComments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          }
         }
        }
       }
      }
     },
     ShoppingCart: {
      doits: {
       addWareToShoppingCart: {
        details: {
         set: {
          wareId: string,
          selectedPreDesignFeatures?: { preDesignColor?: { featureType: 'color', colorCode: string, pic: { _id: any, fileName: string, type: string, size: number }[] }, clothSize?: { featureType: 'clothSize', size: 'Small' | 'Medium' | 'large' | 'XL' | '2XL' | '3XL' | '4XL', pic: { _id: any, fileName: string, type: string, size: number }[] } }[],
          quantity: number,
          description?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           }
          },
          wares?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1
          }
         }
        }
       },
       getShoppingCart: {
        details: {
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1,
             states?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             cities?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              }
             }
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1,
              states?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             cities?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              }
             }
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             state?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1,
              states?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             }
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          wares?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1,
           wareType?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1,
            wares?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             brand?: 0 | 1,
             photos?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             description?: 0 | 1,
             properties?: 0 | 1,
             price?: 0 | 1,
             layers?: 0 | 1,
             preDesignFeatures?: 0 | 1,
             preDesignRelations?: 0 | 1,
             wareType?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              icon?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1,
              isDesignable?: 0 | 1,
              features?: 0 | 1
             },
             orders?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              totalPrice?: 0 | 1,
              confirmationNumber?: 0 | 1,
              discount?: 0 | 1,
              discountCode?: 0 | 1,
              paymentStatus?: 0 | 1,
              orderStatus?: 0 | 1
             },
             wareCategories?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1
             },
             averageScore?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              totalRate?: 0 | 1
             },
             comments?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              content?: 0 | 1,
              commentStatus?: 0 | 1
             }
            },
            wareCategories?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             wares?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              brand?: 0 | 1,
              photos?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1,
              properties?: 0 | 1,
              price?: 0 | 1,
              layers?: 0 | 1,
              preDesignFeatures?: 0 | 1,
              preDesignRelations?: 0 | 1
             },
             wareType?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              icon?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1,
              isDesignable?: 0 | 1,
              features?: 0 | 1
             }
            }
           },
           orders?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalPrice?: 0 | 1,
            confirmationNumber?: 0 | 1,
            discount?: 0 | 1,
            discountCode?: 0 | 1,
            paymentStatus?: 0 | 1,
            orderStatus?: 0 | 1,
            user?: {
             _id?: 0 | 1,
             name?: 0 | 1,
             lastName?: 0 | 1,
             phone?: 0 | 1,
             gender?: 0 | 1,
             birthDate?: 0 | 1,
             postalCode?: 0 | 1,
             level?: 0 | 1,
             email?: 0 | 1,
             isActive?: 0 | 1,
             creditCardNumber?: 0 | 1,
             profilePicture?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             addresses?: {
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              },
              state?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              city?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              addressTxt?: 0 | 1,
              addressId?: 0 | 1
             }
            },
            wares?: {
             ware?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              brand?: 0 | 1,
              photos?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1,
              properties?: 0 | 1,
              price?: 0 | 1,
              layers?: 0 | 1,
              preDesignFeatures?: 0 | 1,
              preDesignRelations?: 0 | 1,
              wareType?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               icon?: {
                _id?: 0 | 1,
                createdAt?: 0 | 1,
                updateAt?: 0 | 1,
                filename?: 0 | 1,
                type?: 0 | 1,
                size?: 0 | 1
               },
               description?: 0 | 1,
               isDesignable?: 0 | 1,
               features?: 0 | 1
              },
              orders?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               totalPrice?: 0 | 1,
               confirmationNumber?: 0 | 1,
               discount?: 0 | 1,
               discountCode?: 0 | 1,
               paymentStatus?: 0 | 1,
               orderStatus?: 0 | 1
              },
              wareCategories?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1
              },
              averageScore?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               totalRate?: 0 | 1
              },
              comments?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               content?: 0 | 1,
               commentStatus?: 0 | 1
              }
             },
             quantity?: 0 | 1,
             warePrice?: 0 | 1,
             description?: 0 | 1
            }
           },
           wareCategories?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            wares?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             brand?: 0 | 1,
             photos?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             description?: 0 | 1,
             properties?: 0 | 1,
             price?: 0 | 1,
             layers?: 0 | 1,
             preDesignFeatures?: 0 | 1,
             preDesignRelations?: 0 | 1,
             wareType?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              icon?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1,
              isDesignable?: 0 | 1,
              features?: 0 | 1
             },
             orders?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              totalPrice?: 0 | 1,
              confirmationNumber?: 0 | 1,
              discount?: 0 | 1,
              discountCode?: 0 | 1,
              paymentStatus?: 0 | 1,
              orderStatus?: 0 | 1
             },
             wareCategories?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1
             },
             averageScore?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              totalRate?: 0 | 1
             },
             comments?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              content?: 0 | 1,
              commentStatus?: 0 | 1
             }
            },
            wareType?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             icon?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             description?: 0 | 1,
             isDesignable?: 0 | 1,
             features?: 0 | 1,
             wares?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              brand?: 0 | 1,
              photos?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1,
              properties?: 0 | 1,
              price?: 0 | 1,
              layers?: 0 | 1,
              preDesignFeatures?: 0 | 1,
              preDesignRelations?: 0 | 1
             },
             wareCategories?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1
             }
            }
           },
           averageScore?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalRate?: 0 | 1,
            ware?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             title?: 0 | 1,
             summary?: 0 | 1,
             content?: 0 | 1,
             photo?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             totalLikes?: 0 | 1,
             totalViews?: 0 | 1,
             totalComments?: 0 | 1,
             author?: {
              _id?: 0 | 1,
              name?: 0 | 1,
              lastName?: 0 | 1,
              phone?: 0 | 1,
              gender?: 0 | 1,
              birthDate?: 0 | 1,
              postalCode?: 0 | 1,
              level?: 0 | 1,
              email?: 0 | 1,
              isActive?: 0 | 1,
              creditCardNumber?: 0 | 1,
              profilePicture?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              }
             },
             comments?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              content?: 0 | 1,
              commentStatus?: 0 | 1
             },
             likedUsers?: {
              _id?: 0 | 1,
              name?: 0 | 1,
              lastName?: 0 | 1,
              phone?: 0 | 1,
              gender?: 0 | 1,
              birthDate?: 0 | 1,
              postalCode?: 0 | 1,
              level?: 0 | 1,
              email?: 0 | 1,
              isActive?: 0 | 1,
              creditCardNumber?: 0 | 1,
              profilePicture?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              }
             },
             blogTags?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1
             },
             blogCategory?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              icon?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1
             }
            },
            raters?: {
             user?: {
              _id?: 0 | 1,
              name?: 0 | 1,
              lastName?: 0 | 1,
              phone?: 0 | 1,
              gender?: 0 | 1,
              birthDate?: 0 | 1,
              postalCode?: 0 | 1,
              level?: 0 | 1,
              email?: 0 | 1,
              isActive?: 0 | 1,
              creditCardNumber?: 0 | 1,
              profilePicture?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              addresses?: {
               country?: {
                _id?: 0 | 1,
                createdAt?: 0 | 1,
                updateAt?: 0 | 1,
                name?: 0 | 1,
                enName?: 0 | 1,
                countryCode?: 0 | 1
               },
               state?: {
                _id?: 0 | 1,
                createdAt?: 0 | 1,
                updateAt?: 0 | 1,
                name?: 0 | 1,
                enName?: 0 | 1
               },
               city?: {
                _id?: 0 | 1,
                createdAt?: 0 | 1,
                updateAt?: 0 | 1,
                name?: 0 | 1,
                enName?: 0 | 1
               },
               addressTxt?: 0 | 1,
               addressId?: 0 | 1
              }
             }
            }
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1,
            user?: {
             _id?: 0 | 1,
             name?: 0 | 1,
             lastName?: 0 | 1,
             phone?: 0 | 1,
             gender?: 0 | 1,
             birthDate?: 0 | 1,
             postalCode?: 0 | 1,
             level?: 0 | 1,
             email?: 0 | 1,
             isActive?: 0 | 1,
             creditCardNumber?: 0 | 1,
             profilePicture?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             addresses?: {
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              },
              state?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              city?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              addressTxt?: 0 | 1,
              addressId?: 0 | 1
             }
            },
            blogPost?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             title?: 0 | 1,
             summary?: 0 | 1,
             content?: 0 | 1,
             photo?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             totalLikes?: 0 | 1,
             totalViews?: 0 | 1,
             totalComments?: 0 | 1,
             author?: {
              _id?: 0 | 1,
              name?: 0 | 1,
              lastName?: 0 | 1,
              phone?: 0 | 1,
              gender?: 0 | 1,
              birthDate?: 0 | 1,
              postalCode?: 0 | 1,
              level?: 0 | 1,
              email?: 0 | 1,
              isActive?: 0 | 1,
              creditCardNumber?: 0 | 1,
              profilePicture?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              }
             },
             comments?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              content?: 0 | 1,
              commentStatus?: 0 | 1
             },
             likedUsers?: {
              _id?: 0 | 1,
              name?: 0 | 1,
              lastName?: 0 | 1,
              phone?: 0 | 1,
              gender?: 0 | 1,
              birthDate?: 0 | 1,
              postalCode?: 0 | 1,
              level?: 0 | 1,
              email?: 0 | 1,
              isActive?: 0 | 1,
              creditCardNumber?: 0 | 1,
              profilePicture?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              }
             },
             blogTags?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1
             },
             blogCategory?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              icon?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1
             }
            },
            ware?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             brand?: 0 | 1,
             photos?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             description?: 0 | 1,
             properties?: 0 | 1,
             price?: 0 | 1,
             layers?: 0 | 1,
             preDesignFeatures?: 0 | 1,
             preDesignRelations?: 0 | 1,
             wareType?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              icon?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1,
              isDesignable?: 0 | 1,
              features?: 0 | 1
             },
             orders?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              totalPrice?: 0 | 1,
              confirmationNumber?: 0 | 1,
              discount?: 0 | 1,
              discountCode?: 0 | 1,
              paymentStatus?: 0 | 1,
              orderStatus?: 0 | 1
             },
             wareCategories?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1
             },
             averageScore?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              totalRate?: 0 | 1
             },
             comments?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              content?: 0 | 1,
              commentStatus?: 0 | 1
             }
            },
            repliedComments?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             content?: 0 | 1,
             commentStatus?: 0 | 1,
             user?: {
              _id?: 0 | 1,
              name?: 0 | 1,
              lastName?: 0 | 1,
              phone?: 0 | 1,
              gender?: 0 | 1,
              birthDate?: 0 | 1,
              postalCode?: 0 | 1,
              level?: 0 | 1,
              email?: 0 | 1,
              isActive?: 0 | 1,
              creditCardNumber?: 0 | 1,
              profilePicture?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              }
             },
             blogPost?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              title?: 0 | 1,
              summary?: 0 | 1,
              content?: 0 | 1,
              photo?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              totalLikes?: 0 | 1,
              totalViews?: 0 | 1,
              totalComments?: 0 | 1
             },
             ware?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              brand?: 0 | 1,
              photos?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1,
              properties?: 0 | 1,
              price?: 0 | 1,
              layers?: 0 | 1,
              preDesignFeatures?: 0 | 1,
              preDesignRelations?: 0 | 1
             },
             repliedComments?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              content?: 0 | 1,
              commentStatus?: 0 | 1
             }
            }
           }
          }
         }
        }
       },
       deleteWareOfShoppingCart: {
        details: {
         set: {
          shoppingCartId: string,
          wareId: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          wares?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1,
           wareType?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1
           },
           orders?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalPrice?: 0 | 1,
            confirmationNumber?: 0 | 1,
            discount?: 0 | 1,
            discountCode?: 0 | 1,
            paymentStatus?: 0 | 1,
            orderStatus?: 0 | 1
           },
           wareCategories?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           averageScore?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalRate?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          }
         }
        }
       },
       changeQuantityInShoppingCart: {
        details: {
         set: {
          shoppingCartId: string,
          wareId: string,
          quantity: number
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           }
          },
          wares?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1
          }
         }
        }
       },
       getShoppingCarts: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           totalPrice?: 1 | -1,
           paymentStatus?: 1 | -1,
           orderStatus?: 1 | -1,
           totalQuantity?: 1 | -1
          },
          wareIds?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          totalPrice?: 0 | 1,
          confirmationNumber?: 0 | 1,
          discount?: 0 | 1,
          discountCode?: 0 | 1,
          paymentStatus?: 0 | 1,
          orderStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          wares?: {
           ware?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1,
            wareType?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             icon?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             description?: 0 | 1,
             isDesignable?: 0 | 1,
             features?: 0 | 1
            },
            orders?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             totalPrice?: 0 | 1,
             confirmationNumber?: 0 | 1,
             discount?: 0 | 1,
             discountCode?: 0 | 1,
             paymentStatus?: 0 | 1,
             orderStatus?: 0 | 1
            },
            wareCategories?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1
            },
            averageScore?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             totalRate?: 0 | 1
            },
            comments?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             content?: 0 | 1,
             commentStatus?: 0 | 1
            }
           },
           quantity?: 0 | 1,
           warePrice?: 0 | 1,
           description?: 0 | 1
          }
         }
        }
       }
      }
     },
     Order: {
      doits: {
       createOrder: {
        details: {
         set: {
          shoppingCartId: string,
          description?: string,
          orderStatus: 'REJECTED' | 'PROCESSING' | 'DELIVERED' | 'CANCELED' | 'InTRANSIT' | 'RETURNED',
          paymentStatus: 'PAID' | 'NOTPAID'
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          totalPrice?: 0 | 1,
          confirmationNumber?: 0 | 1,
          discount?: 0 | 1,
          discountCode?: 0 | 1,
          paymentStatus?: 0 | 1,
          orderStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           }
          },
          wares?: {
           ware?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           quantity?: 0 | 1,
           warePrice?: 0 | 1,
           description?: 0 | 1
          }
         }
        }
       },
       updateOrder: {
        details: {
         set: {
          orderId: string,
          description?: string,
          paymentStatus?: 'PAID' | 'NOTPAID',
          OrderStatus?: 'REJECTED' | 'PROCESSING' | 'DELIVERED' | 'CANCELED' | 'InTRANSIT' | 'RETURNED',
          totalPrice?: number,
          totalQuantity?: number
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          totalPrice?: 0 | 1,
          confirmationNumber?: 0 | 1,
          discount?: 0 | 1,
          discountCode?: 0 | 1,
          paymentStatus?: 0 | 1,
          orderStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           }
          },
          wares?: {
           ware?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           quantity?: 0 | 1,
           warePrice?: 0 | 1,
           description?: 0 | 1
          }
         }
        }
       },
       deleteWareOfOrder: {
        details: {
         set: {
          orderId: string,
          wareId: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          totalPrice?: 0 | 1,
          confirmationNumber?: 0 | 1,
          discount?: 0 | 1,
          discountCode?: 0 | 1,
          paymentStatus?: 0 | 1,
          orderStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           }
          },
          wares?: {
           ware?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           quantity?: 0 | 1,
           warePrice?: 0 | 1,
           description?: 0 | 1
          }
         }
        }
       },
       deleteOrder: {
        details: {
         set: {
          orderId: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          totalPrice?: 0 | 1,
          confirmationNumber?: 0 | 1,
          discount?: 0 | 1,
          discountCode?: 0 | 1,
          paymentStatus?: 0 | 1,
          orderStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           }
          },
          wares?: {
           ware?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           quantity?: 0 | 1,
           warePrice?: 0 | 1,
           description?: 0 | 1
          }
         }
        }
       },
       getOrder: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          totalPrice?: 0 | 1,
          confirmationNumber?: 0 | 1,
          discount?: 0 | 1,
          discountCode?: 0 | 1,
          paymentStatus?: 0 | 1,
          orderStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          wares?: {
           ware?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1,
            wareType?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             icon?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             description?: 0 | 1,
             isDesignable?: 0 | 1,
             features?: 0 | 1
            },
            orders?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             totalPrice?: 0 | 1,
             confirmationNumber?: 0 | 1,
             discount?: 0 | 1,
             discountCode?: 0 | 1,
             paymentStatus?: 0 | 1,
             orderStatus?: 0 | 1
            },
            wareCategories?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1
            },
            averageScore?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             totalRate?: 0 | 1
            },
            comments?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             content?: 0 | 1,
             commentStatus?: 0 | 1
            }
           },
           quantity?: 0 | 1,
           warePrice?: 0 | 1,
           description?: 0 | 1
          }
         }
        }
       },
       getOrders: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           totalPrice?: 1 | -1,
           paymentStatus?: 1 | -1,
           orderStatus?: 1 | -1
          },
          wareIds?: any,
          paymentStatus?: string,
          orderStatus?: string,
          userId?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          totalPrice?: 0 | 1,
          confirmationNumber?: 0 | 1,
          discount?: 0 | 1,
          discountCode?: 0 | 1,
          paymentStatus?: 0 | 1,
          orderStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          wares?: {
           quantity?: 0 | 1,
           warePrice?: 0 | 1,
           description?: 0 | 1,
           ware?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           }
          }
         }
        }
       },
       changeQuantityOfWareInOrder: {
        details: {
         set: {
          orderId: string,
          wareId: string,
          quantity: number
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          totalPrice?: 0 | 1,
          confirmationNumber?: 0 | 1,
          discount?: 0 | 1,
          discountCode?: 0 | 1,
          paymentStatus?: 0 | 1,
          orderStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           }
          },
          wares?: {
           ware?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           quantity?: 0 | 1,
           warePrice?: 0 | 1,
           description?: 0 | 1
          }
         }
        }
       }
      }
     },
     Shop: {
      doits: {
       createShop: {
        details: {
         set: {
          name: string,
          logo?: string,
          address?: string,
          phone?: number,
          location?: [
           any,
           any
          ],
          certificate?: string,
          socialMedias?: {
           instagram: string,
           twitter: string,
           telegram: string,
           faceBook: string,
           pinterest: string
          }
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          address?: 0 | 1
         }
        }
       },
       updateShop: {
        details: {
         set: {
          _id?: any,
          name?: string,
          logo?: string,
          address?: string,
          phone?: number,
          location?: [
           any,
           any
          ],
          certificate?: string,
          socialMedias?: {
           instagram?: string,
           twitter?: string,
           telegram?: string,
           faceBook?: string,
           pinterest?: string
          }
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          address?: 0 | 1,
          country?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           countryCode?: 0 | 1,
           states?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          state?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          wareTypes?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           isDesignable?: 0 | 1,
           features?: 0 | 1,
           wares?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1
           },
           wareCategories?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           }
          }
         }
        }
       }
      }
     },
     ContactUs: {
      doits: {
       createContactUs: {
        details: {
         set: {
          name: string,
          email: any,
          uploadedFiles: any,
          message: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          email?: 0 | 1,
          uploadedFiles?: 0 | 1,
          message?: 0 | 1
         }
        }
       },
       deleteContactUs: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          }
         }
        }
       },
       getContactUs: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          email?: 0 | 1,
          uploadedFiles?: 0 | 1,
          message?: 0 | 1
         }
        }
       },
       getContactUss: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           message?: 1 | -1,
           name?: 1 | -1,
           email?: 1 | -1
          },
          name?: string,
          email?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          email?: 0 | 1,
          uploadedFiles?: 0 | 1,
          message?: 0 | 1
         }
        }
       }
      }
     },
     Invoice: {
      doits: {
       createInvoiceFromOrder: {
        details: {
         set: {
          orderId?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           }
          },
          wares?: {
           quantity?: 0 | 1,
           warePrice?: 0 | 1,
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1
          }
         }
        }
       },
       createOffLineInvoice: {
        details: {
         set: {
          name: string,
          lastName: string,
          phone: number,
          address?: {
           country: string,
           state: string,
           city: string,
           addressTxt: string
          },
          waresInfo: any
         }
        }
       },
       addWareToInvoice: {
        details: {
         set: {
          invoiceId: string,
          wareId: string,
          quantity: number,
          description?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           }
          },
          wares?: {
           quantity?: 0 | 1,
           warePrice?: 0 | 1,
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1
          }
         }
        }
       },
       changeQuantityInInvoice: {
        details: {
         set: {
          invoiceId: string,
          wareId: string,
          quantity: number
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           }
          },
          wares?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1
          }
         }
        }
       },
       deleteWareOfInvoice: {
        details: {
         set: {
          invoiceId: string,
          wareId: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          wares?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1,
           wareType?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1
           },
           orders?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalPrice?: 0 | 1,
            confirmationNumber?: 0 | 1,
            discount?: 0 | 1,
            discountCode?: 0 | 1,
            paymentStatus?: 0 | 1,
            orderStatus?: 0 | 1
           },
           wareCategories?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           averageScore?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalRate?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          }
         }
        }
       },
       getInvoice: {
        details: {
         set: any,
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1,
             states?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             cities?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              }
             }
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1,
              states?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             cities?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              }
             }
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             state?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1,
              states?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             }
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          wares?: {
           quantity?: 0 | 1,
           warePrice?: 0 | 1,
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1,
           wareType?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1,
            wares?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             brand?: 0 | 1,
             photos?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             description?: 0 | 1,
             properties?: 0 | 1,
             price?: 0 | 1,
             layers?: 0 | 1,
             preDesignFeatures?: 0 | 1,
             preDesignRelations?: 0 | 1,
             wareType?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              icon?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1,
              isDesignable?: 0 | 1,
              features?: 0 | 1
             },
             orders?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              totalPrice?: 0 | 1,
              confirmationNumber?: 0 | 1,
              discount?: 0 | 1,
              discountCode?: 0 | 1,
              paymentStatus?: 0 | 1,
              orderStatus?: 0 | 1
             },
             wareCategories?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1
             },
             averageScore?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              totalRate?: 0 | 1
             },
             comments?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              content?: 0 | 1,
              commentStatus?: 0 | 1
             }
            },
            wareCategories?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             wares?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              brand?: 0 | 1,
              photos?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1,
              properties?: 0 | 1,
              price?: 0 | 1,
              layers?: 0 | 1,
              preDesignFeatures?: 0 | 1,
              preDesignRelations?: 0 | 1
             },
             wareType?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              icon?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1,
              isDesignable?: 0 | 1,
              features?: 0 | 1
             }
            }
           },
           orders?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalPrice?: 0 | 1,
            confirmationNumber?: 0 | 1,
            discount?: 0 | 1,
            discountCode?: 0 | 1,
            paymentStatus?: 0 | 1,
            orderStatus?: 0 | 1,
            user?: {
             _id?: 0 | 1,
             name?: 0 | 1,
             lastName?: 0 | 1,
             phone?: 0 | 1,
             gender?: 0 | 1,
             birthDate?: 0 | 1,
             postalCode?: 0 | 1,
             level?: 0 | 1,
             email?: 0 | 1,
             isActive?: 0 | 1,
             creditCardNumber?: 0 | 1,
             profilePicture?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             addresses?: {
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              },
              state?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              city?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              addressTxt?: 0 | 1,
              addressId?: 0 | 1
             }
            },
            wares?: {
             ware?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              brand?: 0 | 1,
              photos?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1,
              properties?: 0 | 1,
              price?: 0 | 1,
              layers?: 0 | 1,
              preDesignFeatures?: 0 | 1,
              preDesignRelations?: 0 | 1,
              wareType?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               icon?: {
                _id?: 0 | 1,
                createdAt?: 0 | 1,
                updateAt?: 0 | 1,
                filename?: 0 | 1,
                type?: 0 | 1,
                size?: 0 | 1
               },
               description?: 0 | 1,
               isDesignable?: 0 | 1,
               features?: 0 | 1
              },
              orders?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               totalPrice?: 0 | 1,
               confirmationNumber?: 0 | 1,
               discount?: 0 | 1,
               discountCode?: 0 | 1,
               paymentStatus?: 0 | 1,
               orderStatus?: 0 | 1
              },
              wareCategories?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1
              },
              averageScore?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               totalRate?: 0 | 1
              },
              comments?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               content?: 0 | 1,
               commentStatus?: 0 | 1
              }
             },
             quantity?: 0 | 1,
             warePrice?: 0 | 1,
             description?: 0 | 1
            }
           },
           wareCategories?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            wares?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             brand?: 0 | 1,
             photos?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             description?: 0 | 1,
             properties?: 0 | 1,
             price?: 0 | 1,
             layers?: 0 | 1,
             preDesignFeatures?: 0 | 1,
             preDesignRelations?: 0 | 1,
             wareType?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              icon?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1,
              isDesignable?: 0 | 1,
              features?: 0 | 1
             },
             orders?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              totalPrice?: 0 | 1,
              confirmationNumber?: 0 | 1,
              discount?: 0 | 1,
              discountCode?: 0 | 1,
              paymentStatus?: 0 | 1,
              orderStatus?: 0 | 1
             },
             wareCategories?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1
             },
             averageScore?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              totalRate?: 0 | 1
             },
             comments?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              content?: 0 | 1,
              commentStatus?: 0 | 1
             }
            },
            wareType?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             icon?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             description?: 0 | 1,
             isDesignable?: 0 | 1,
             features?: 0 | 1,
             wares?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              brand?: 0 | 1,
              photos?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1,
              properties?: 0 | 1,
              price?: 0 | 1,
              layers?: 0 | 1,
              preDesignFeatures?: 0 | 1,
              preDesignRelations?: 0 | 1
             },
             wareCategories?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1
             }
            }
           },
           averageScore?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalRate?: 0 | 1,
            ware?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             title?: 0 | 1,
             summary?: 0 | 1,
             content?: 0 | 1,
             photo?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             totalLikes?: 0 | 1,
             totalViews?: 0 | 1,
             totalComments?: 0 | 1,
             author?: {
              _id?: 0 | 1,
              name?: 0 | 1,
              lastName?: 0 | 1,
              phone?: 0 | 1,
              gender?: 0 | 1,
              birthDate?: 0 | 1,
              postalCode?: 0 | 1,
              level?: 0 | 1,
              email?: 0 | 1,
              isActive?: 0 | 1,
              creditCardNumber?: 0 | 1,
              profilePicture?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              }
             },
             comments?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              content?: 0 | 1,
              commentStatus?: 0 | 1
             },
             likedUsers?: {
              _id?: 0 | 1,
              name?: 0 | 1,
              lastName?: 0 | 1,
              phone?: 0 | 1,
              gender?: 0 | 1,
              birthDate?: 0 | 1,
              postalCode?: 0 | 1,
              level?: 0 | 1,
              email?: 0 | 1,
              isActive?: 0 | 1,
              creditCardNumber?: 0 | 1,
              profilePicture?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              }
             },
             blogTags?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1
             },
             blogCategory?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              icon?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1
             }
            },
            raters?: {
             user?: {
              _id?: 0 | 1,
              name?: 0 | 1,
              lastName?: 0 | 1,
              phone?: 0 | 1,
              gender?: 0 | 1,
              birthDate?: 0 | 1,
              postalCode?: 0 | 1,
              level?: 0 | 1,
              email?: 0 | 1,
              isActive?: 0 | 1,
              creditCardNumber?: 0 | 1,
              profilePicture?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              addresses?: {
               country?: {
                _id?: 0 | 1,
                createdAt?: 0 | 1,
                updateAt?: 0 | 1,
                name?: 0 | 1,
                enName?: 0 | 1,
                countryCode?: 0 | 1
               },
               state?: {
                _id?: 0 | 1,
                createdAt?: 0 | 1,
                updateAt?: 0 | 1,
                name?: 0 | 1,
                enName?: 0 | 1
               },
               city?: {
                _id?: 0 | 1,
                createdAt?: 0 | 1,
                updateAt?: 0 | 1,
                name?: 0 | 1,
                enName?: 0 | 1
               },
               addressTxt?: 0 | 1,
               addressId?: 0 | 1
              }
             }
            }
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1,
            user?: {
             _id?: 0 | 1,
             name?: 0 | 1,
             lastName?: 0 | 1,
             phone?: 0 | 1,
             gender?: 0 | 1,
             birthDate?: 0 | 1,
             postalCode?: 0 | 1,
             level?: 0 | 1,
             email?: 0 | 1,
             isActive?: 0 | 1,
             creditCardNumber?: 0 | 1,
             profilePicture?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             addresses?: {
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              },
              state?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              city?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              addressTxt?: 0 | 1,
              addressId?: 0 | 1
             }
            },
            blogPost?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             title?: 0 | 1,
             summary?: 0 | 1,
             content?: 0 | 1,
             photo?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             totalLikes?: 0 | 1,
             totalViews?: 0 | 1,
             totalComments?: 0 | 1,
             author?: {
              _id?: 0 | 1,
              name?: 0 | 1,
              lastName?: 0 | 1,
              phone?: 0 | 1,
              gender?: 0 | 1,
              birthDate?: 0 | 1,
              postalCode?: 0 | 1,
              level?: 0 | 1,
              email?: 0 | 1,
              isActive?: 0 | 1,
              creditCardNumber?: 0 | 1,
              profilePicture?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              }
             },
             comments?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              content?: 0 | 1,
              commentStatus?: 0 | 1
             },
             likedUsers?: {
              _id?: 0 | 1,
              name?: 0 | 1,
              lastName?: 0 | 1,
              phone?: 0 | 1,
              gender?: 0 | 1,
              birthDate?: 0 | 1,
              postalCode?: 0 | 1,
              level?: 0 | 1,
              email?: 0 | 1,
              isActive?: 0 | 1,
              creditCardNumber?: 0 | 1,
              profilePicture?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              }
             },
             blogTags?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1
             },
             blogCategory?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              icon?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1
             }
            },
            ware?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             brand?: 0 | 1,
             photos?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             description?: 0 | 1,
             properties?: 0 | 1,
             price?: 0 | 1,
             layers?: 0 | 1,
             preDesignFeatures?: 0 | 1,
             preDesignRelations?: 0 | 1,
             wareType?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              icon?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1,
              isDesignable?: 0 | 1,
              features?: 0 | 1
             },
             orders?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              totalPrice?: 0 | 1,
              confirmationNumber?: 0 | 1,
              discount?: 0 | 1,
              discountCode?: 0 | 1,
              paymentStatus?: 0 | 1,
              orderStatus?: 0 | 1
             },
             wareCategories?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1
             },
             averageScore?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              totalRate?: 0 | 1
             },
             comments?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              content?: 0 | 1,
              commentStatus?: 0 | 1
             }
            },
            repliedComments?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             content?: 0 | 1,
             commentStatus?: 0 | 1,
             user?: {
              _id?: 0 | 1,
              name?: 0 | 1,
              lastName?: 0 | 1,
              phone?: 0 | 1,
              gender?: 0 | 1,
              birthDate?: 0 | 1,
              postalCode?: 0 | 1,
              level?: 0 | 1,
              email?: 0 | 1,
              isActive?: 0 | 1,
              creditCardNumber?: 0 | 1,
              profilePicture?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              }
             },
             blogPost?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              title?: 0 | 1,
              summary?: 0 | 1,
              content?: 0 | 1,
              photo?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              totalLikes?: 0 | 1,
              totalViews?: 0 | 1,
              totalComments?: 0 | 1
             },
             ware?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              brand?: 0 | 1,
              photos?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               filename?: 0 | 1,
               type?: 0 | 1,
               size?: 0 | 1
              },
              description?: 0 | 1,
              properties?: 0 | 1,
              price?: 0 | 1,
              layers?: 0 | 1,
              preDesignFeatures?: 0 | 1,
              preDesignRelations?: 0 | 1
             },
             repliedComments?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              content?: 0 | 1,
              commentStatus?: 0 | 1
             }
            }
           }
          }
         }
        }
       },
       getInvoices: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           totalPrice?: 1 | -1,
           totalQuantity?: 1 | -1,
           discount?: 1 | -1
          },
          wareIds?: any,
          userId?: string,
          userName?: string,
          userLastName?: string,
          userPhone?: number
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          totalPrice?: 0 | 1,
          confirmationNumber?: 0 | 1,
          discount?: 0 | 1,
          discountCode?: 0 | 1,
          paymentStatus?: 0 | 1,
          orderStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           profilePicture?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          wares?: {
           ware?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            brand?: 0 | 1,
            photos?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            properties?: 0 | 1,
            price?: 0 | 1,
            layers?: 0 | 1,
            preDesignFeatures?: 0 | 1,
            preDesignRelations?: 0 | 1,
            wareType?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             icon?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              filename?: 0 | 1,
              type?: 0 | 1,
              size?: 0 | 1
             },
             description?: 0 | 1,
             isDesignable?: 0 | 1,
             features?: 0 | 1
            },
            orders?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             totalPrice?: 0 | 1,
             confirmationNumber?: 0 | 1,
             discount?: 0 | 1,
             discountCode?: 0 | 1,
             paymentStatus?: 0 | 1,
             orderStatus?: 0 | 1
            },
            wareCategories?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1
            },
            averageScore?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             totalRate?: 0 | 1
            },
            comments?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             content?: 0 | 1,
             commentStatus?: 0 | 1
            }
           },
           quantity?: 0 | 1,
           warePrice?: 0 | 1,
           description?: 0 | 1
          }
         }
        }
       }
      }
     },
     Rate: {
      doits: {
       giveScoreToWare: {
        details: {
         set: {
          wareId: any,
          score: 1 | 2 | 3 | 4 | 5
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          totalRate?: 0 | 1,
          ware?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          },
          raters?: {
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           }
          }
         }
        }
       }
      }
     }
    }
   },
   static: {
    models: {
     BlogFirstPage: {
      doits: {
       getBlogFirstPage: {
        details: {
         set: any,
         get?: never
        }
       }
      }
     },
     StoreHomePage: {
      doits: {
       getStoreHomePage: {
        details: {
         set: any,
         get?: never
        }
       },
       addToStoreHomePageSlider: {
        details: {
         set: {
          photo: any,
          title: any,
          subTitle: any,
          url: any,
          type: any
         }
        }
       }
      }
     },
     ShopPage: {
      doits: {
       getShopPage: {
        details: {
         set: any,
         get?: never
        }
       }
      }
     }
    }
   },
   streams: {
    models: {
     File: {
      doits: {
       uploadFile: {
        details: {
         set: {
          file?: {
           filename: string,
           type: 'image/jpeg',
           content: any,
           size: number
          }
         }
        }
       },
       downloadFile: {
        details: {
         set: {
          _id: string,
          fileType: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          filename?: 0 | 1,
          type?: 0 | 1,
          size?: 0 | 1,
          blogPost?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           },
           likedUsers?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            profilePicture?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            }
           },
           blogTags?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           blogCategory?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1
           }
          },
          ware?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           brand?: 0 | 1,
           photos?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           properties?: 0 | 1,
           price?: 0 | 1,
           layers?: 0 | 1,
           preDesignFeatures?: 0 | 1,
           preDesignRelations?: 0 | 1,
           wareType?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1,
            isDesignable?: 0 | 1,
            features?: 0 | 1
           },
           orders?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalPrice?: 0 | 1,
            confirmationNumber?: 0 | 1,
            discount?: 0 | 1,
            discountCode?: 0 | 1,
            paymentStatus?: 0 | 1,
            orderStatus?: 0 | 1
           },
           wareCategories?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           averageScore?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            totalRate?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 };
}
