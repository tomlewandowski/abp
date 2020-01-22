using System.Threading;
using System.Threading.Tasks;

namespace Volo.Abp.Application.Cqrs
{
    public interface IQueryHandler<in TQuery, TResult>
        where TQuery : IQuery<TResult>
    {
        Task<TResult> Handle(TQuery query);
    }
}
