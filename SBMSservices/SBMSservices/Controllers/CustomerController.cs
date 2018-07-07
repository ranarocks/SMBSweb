using SBMS.BAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SBMS.Models;
using SBMSservices.APIHelpers;
using System.Threading.Tasks;
using System.Data;

namespace SBMSservices.Controllers
{
    /// <summary>
    /// this is cutomer method
    /// </summary>
    [RoutePrefix("Customer")]
    public class CustomerController : ApiController   
    {
        CustomerBAL bal;
        public CustomerController()
        {
            bal = new CustomerBAL();
        }


        [Route("GetCustomerList")]
        [HttpGet]
        public async Task<ServiceResponse<CustomerModel>> GetCustomerList(int type, Int16 active)
        {
            CustomerModel CM = new CustomerModel();
            DataTable dt;
            var objSR = new ServiceResponse<CustomerModel>();
            List<CustomerModel> objList = new List<CustomerModel>();
            try
            {
                    CM.type = type;
                    CM.Active = active;
                    objSR.List = bal.LoadGrid(CM).AsEnumerable().Select(row=>new CustomerModel() {
                    Id= row["Id"] == DBNull.Value ? 0 : Convert.ToInt32(row["Id"]),
                    CustomerCode = row["CustomerCode"] == DBNull.Value ? string.Empty : Convert.ToString(row["CustomerCode"]),
                    AadharNo = row["AadharNo"] == DBNull.Value ? string.Empty : Convert.ToString(row["AadharNo"]),
                    Address = row["Address"] == DBNull.Value ? string.Empty : Convert.ToString(row["Address"]),
                    City = row["City"] == DBNull.Value ? string.Empty : Convert.ToString(row["City"]),
                    DateOfBirth = row["DateOfBirth"] == DBNull.Value ? DateTime.MinValue : Convert.ToDateTime(row["DateOfBirth"]),
                    Email = row["Email"] == DBNull.Value ? string.Empty : Convert.ToString(row["Email"]),
                    FirstName = row["FirstName"] == DBNull.Value ? string.Empty : Convert.ToString(row["FirstName"]),
                    FirstVisit = row["FistVisitDate"] == DBNull.Value ? DateTime.MinValue : Convert.ToDateTime(row["FistVisitDate"]),
                    Gender  = row["Gender"] == DBNull.Value ? string.Empty : Convert.ToString(row["Gender"]),
                    LastName = row["LastName"] == DBNull.Value ? string.Empty : Convert.ToString(row["LastName"]),
                    GSTN = row["GSTN"] == DBNull.Value ? string.Empty : Convert.ToString(row["GSTN"]),
                    MaritalStatus = row["MaritalStatus"] == DBNull.Value ? string.Empty : Convert.ToString(row["GSTN"]),
                    MobileNo = row["MobileNo"] == DBNull.Value ? string.Empty : Convert.ToString(row["MobileNo"]),
                    PAN = row["PAN"] == DBNull.Value ? string.Empty : Convert.ToString(row["PAN"]),
                    StateId = row["StateId"] == DBNull.Value ? 0 : Convert.ToInt32(row["StateId"]),
                    StateName = row["State"] == DBNull.Value ? string.Empty : Convert.ToString(row["State"]),
                    Zip = row["Zip"] == DBNull.Value ? string.Empty : Convert.ToString(row["Zip"]),
                    VisitCount = row["VisitCount"] == DBNull.Value ? 0 : Convert.ToInt32(row["VisitCount"]),
                    LastVisit = row["LastVisitDate"] == DBNull.Value ? DateTime.MinValue : Convert.ToDateTime(row["LastVisitDate"])
                }).ToList();

                objSR.StatusCode = 1;
            }
            catch (Exception ex)
            {
                objSR.StatusCode = 2;
                objSR.Messages.Add("Error occurred while login, " + ex.Message);
            }
            return await Task.Run(() => objSR);
        }
    }
}