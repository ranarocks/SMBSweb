using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using SBMSservices.APIHelpers;
using SBMS.Models;
using SBMS.BAL;
using System.Collections.Generic;
using System;
using SBMSservices.Services;

namespace SBMSservices.Controllers
{
   [Authorize]
    [RoutePrefix("company")]
    public class CompanyController : ApiController
    {
        /// <summary>
        /// 
        /// </summary>
        AdminBL _AdminBL;
        public CompanyController()
        {
            _AdminBL = new AdminBL();
        }
        [Route("create")]
        public async Task<ServiceResponse<string>> create(CompanyModel company)
        {
            var objSR = new ServiceResponse<string>();
            List<CompanyModel> objCompanyModel = new List<CompanyModel>();
            try
            {
                int result = _AdminBL.SaveCompanyProfile(company);
               // int result = 1;
                if (result > 0)
                {
                    objSR.StatusCode = 1;
                    objSR.Messages.Add(company.Name +" is succesfully saved as COMPANY.");
                }
                else
                {
                    objSR.StatusCode = 2;
                    objSR.Messages.Add("There is some issue while saving the company.");
                }
            }
            catch (Exception ex)
            {
                objSR.StatusCode = 2;
                objSR.Messages.Add("Error occurred while login, " + ex.Message);
            }
            return await Task.Run(() => objSR);
        }

        [Route("GetCompanyProfile")]
        public async Task<ServiceResponse<CompanyModel>> GetCompanyProfile()
        {
            var objSR = new ServiceResponse<CompanyModel>();
            var DTtoObj = new DTtoObj();
            var CompanyModel = new CompanyModel();
            List<CompanyModel> objCompanyModel = new List<CompanyModel>();
            try
            {
                CompanyModel = DTtoObj.GetCompanyProfile();
                if (CompanyModel!=null)
                {
                    objSR.StatusCode = 1;
                    objSR.Obj = CompanyModel;
                }
                else
                {
                    objSR.StatusCode = 2;
                    objSR.Messages.Add("No data exists.");
                }
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